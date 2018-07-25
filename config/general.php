<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */
return [
    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 0,

    // Enable CSRF Protection (recommended)
    'enableCsrfProtection' => true,

    'imageDriver' => 'imagick',

    // Whether "index.php" should be visible in URLs
    'omitScriptNameInUrls' => true,

    // Control Panel trigger word
    'cpTrigger' => 'admin',

    // The secure key Craft will use for hashing and encrypting data
    'securityKey' => getenv('SECURITY_KEY'),

    'maxUploadFileSize' => 33554432 * 7,

    'useEmailAsUsername' => true,

    'extraAllowedFileExtensions' => 'json',

    'siteUrl' => getenv('APP_URL'),
    'baseCpUrl' => getenv('APP_URL'),

    'devMode' => getenv('ENVIRONMENT') === 'staging' || getenv('ENVIRONMENT') === 'dev',

    'runQueueAutomatically' => false,

    'cacheDuration' => 'P1W',

    'errorTemplatePrefix' => '_errors/'
];
