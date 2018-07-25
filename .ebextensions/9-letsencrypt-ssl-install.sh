#!/usr/bin/env bash
# Bash script to install lets encrypt SSL certificate as a POST HOOK
# For use with Single instance PHP Elastic Beanstalk
set -e
# Loadvars
. /opt/elasticbeanstalk/support/envvars

# Check if there is certificate on S3 that we can use

ACCOUNT_ID=$(aws sts get-caller-identity --output text --query 'Account')
REGION=$(curl http://169.254.169.254/latest/dynamic/instance-identity/document|grep region|awk -F\" '{print $4}')

echo $ACCOUNT_ID
echo $REGION
echo "bonjour"

URL="s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/ssl.conf"

count=$(aws s3 ls $URL | wc -l)
if [ $count -gt 0 ]
then
  echo "SSL certificate already exists on S3"
 # Copy from S3 bucket

    if [ ! -f /etc/httpd/conf.d/ssl.conf ] ; then

	echo "copying from bucket"
        aws s3 cp s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/ssl.conf /etc/httpd/conf.d/ssl.conf
        aws s3 cp s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/cert.pem /etc/letsencrypt/live/$LE_SSL_DOMAIN/cert.pem
        aws s3 cp s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/privkey.pem /etc/letsencrypt/live/$LE_SSL_DOMAIN/privkey.pem
        aws s3 cp s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/fullchain.pem /etc/letsencrypt/live/$LE_SSL_DOMAIN/fullchain.pem

        # restart
        sudo service httpd restart

    fi

else
  echo "SSL certificate does not exist on s3"
fi

# Install if no SSL certificate installed or SSL install on deploy is true

if [[ ("$LE_INSTALL_SSL_ON_DEPLOY" = true) || (! -f /etc/httpd/conf.d/ssl.conf) ]] ; then

    # Install mod_ssl
    sudo yum -y install mod24_ssl

    # Install json query and get document root
    sudo yum -y install jq

    # Assign value to DOCUMENT_ROOT
    DOCUMENT_ROOT=$(sudo /opt/elasticbeanstalk/bin/get-config optionsettings | jq '."aws:elasticbeanstalk:container:php:phpini"."document_root"' -r)

   SECONDS=0

    # Wait until domain is resolving to ec2 instance
    echo "Pinging $LE_SSL_DOMAIN until online..."
    while ! timeout 0.2 ping -c 1 -n $LE_SSL_DOMAIN &> /dev/null
    do
        SECONDS=$[$SECONDS +1]
        if [ $SECONDS -gt 30 ]
        then
            echo "$SECONDS seonds timeout waiting to ping, lets exit";
            exit 1;
        fi
    done
    echo "Pinging $LE_SSL_DOMAIN successful"

    # Install certbot
    sudo mkdir -p /certbot
    cd /certbot || exit
    wget https://dl.eff.org/certbot-auto;chmod a+x certbot-auto

    # Create certificate and authenticate
    # sudo ./certbot-auto certonly -d "$LE_SSL_DOMAIN" --agree-tos --email "$LE_EMAIL" --webroot --webroot-path /var/app/current"$DOCUMENT_ROOT" --debug --non-interactive --renew-by-default
    sudo ./certbot-auto certonly --debug --non-interactive --email "$LE_EMAIL" --agree-tos --standalone -d "$LE_SSL_DOMAIN" --debug --keep-until-expiring --pre-hook "sudo stop httpd" --post-hook "sudo restart httpd || sudo start httpd"

    # Configure ssl.conf
    sudo mv /etc/httpd/conf.d/ssl.conf.template /etc/httpd/conf.d/ssl.conf
    sudo sed -i -e "s/{DOMAIN}/$LE_SSL_DOMAIN/g" /etc/httpd/conf.d/ssl.conf

    # Install crontab
    sudo crontab /tmp/cronjob

    # Start apache
    sudo service httpd restart

fi

echo 'copying certificate'

# Copy cert to S3 regardless of outcome

aws s3 cp /etc/httpd/conf.d/ssl.conf s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/ssl.conf
aws s3 cp /etc/letsencrypt/live/$LE_SSL_DOMAIN/cert.pem s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/cert.pem
aws s3 cp /etc/letsencrypt/live/$LE_SSL_DOMAIN/privkey.pem s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/privkey.pem
aws s3 cp /etc/letsencrypt/live/$LE_SSL_DOMAIN/fullchain.pem s3://elasticbeanstalk-$REGION-$ACCOUNT_ID/ssl/$LE_SSL_DOMAIN/fullchain.pem
