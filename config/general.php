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
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        'maxUploadFileSize' => 33554432 * 2,

        'useEmailAsUsername' => true,

        'extraAllowedFileExtensions' => ''
    ],

    // Dev environment settings
    'dev' => [
        // Base site URL
        'siteUrl' => null,

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
    ],

    // Staging environment settings
    'staging' => [
        // Base site URL
        'siteUrl' => null,

        'devMode' => true,
    ],

    // Production environment settings
    'production' => [
        // Base site URL
        'siteUrl' => null,
    ],
];
