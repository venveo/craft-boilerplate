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
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,


        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,

        'imageDriver' => 'imagick',

        // Gif sanitation tends to blow up servers due to high memory consumption
        'transformGifs' => false,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        'maxUploadFileSize' => 33554432 * 7,

        'useEmailAsUsername' => true,

        'extraAllowedFileExtensions' => 'json,rvt,dwg,dxf,iges',

        'siteUrl' => getenv('DEFAULT_SITE_URL'),
        'baseCpUrl' => getenv('DEFAULT_SITE_URL'),

        'devMode' => false,

        'runQueueAutomatically' => true,

        'cacheDuration' => 0,

        'enableTemplateCaching' => true,

        'errorTemplatePrefix' => '_errors',

        'extraFileKinds' => [
            'cad' => [
                'label' => 'CAD',
                'extensions' => ['rvt', 'dwg', 'dxf', 'iges'],
            ],
        ],
        'useProjectConfigFile' => false,
        'allowAdminChanges' => true,
        'aliases' => [
            '@dist' => getenv('DIST_BASE_URL') ?? '/',
            '@src' => CRAFT_BASE_PATH . '/src' ?? '/src',
        ]
    ],
    'staging' => [
        'devMode' => true,
    ],
    'dev' => [
        'allowAdminChanges' => true,
        'enableTemplateCaching' => false,
        'devMode' => true,
    ],
];
