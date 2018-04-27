<?php
return [
    'generalImagesS3' => [
        'type' => 'craft\awss3\Volume',
        'url' => getenv('ASSETS_BASE_URL'),
        'subfolder' => 'general-images',
        'keyId' => getenv('AWS_KEY_ID'),
        'secret' => getenv('AWS_SECRET'),
        'bucket' => getenv('AWS_S3_BUCKET'),
        'cfDistributionId' => getenv('AWS_CF_ID'),
        'expires' => '',
        'region' => getenv('AWS_REGION'),
        'storageClass' => '',
        'hasUrls' => 1
    ],
    'documentsS3' => [
        'type' => 'craft\awss3\Volume',
        'url' => getenv('ASSETS_BASE_URL'),
        'subfolder' => 'documents',
        'keyId' => getenv('AWS_KEY_ID'),
        'secret' => getenv('AWS_SECRET'),
        'bucket' => getenv('AWS_S3_BUCKET'),
        'cfDistributionId' => getenv('AWS_CF_ID'),
        'expires' => '',
        'region' => getenv('AWS_REGION'),
        'storageClass' => '',
        'hasUrls' => 1
    ]
];
