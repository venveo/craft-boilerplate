<?php
/**
 * Don't edit the config.example.php.
 * Instead modify the projects/config/upper.php and use ENV VARS
 */

return [

    // Which driver?
    'driver'        => getenv('UPPER_DRIVER') ?: 'dummy',

    // Default for Cache-control s-maxage
    'defaultMaxAge' => 3600 * 24 * 7,

    // Store tags locally and purge Urls
    // In case the cache driver does not support tag purging
    'useLocalTags'  => true,

    // Drivers settings
    'drivers'       => [
        // CloudFlare config
        'cloudflare' => [
            'tagHeaderName'      => 'Cache-Tag',
            'tagHeaderDelimiter' => ',',
            'apiKey'             => getenv('CLOUDFLARE_API_KEY'),
            'apiEmail'           => getenv('CLOUDFLARE_API_EMAIL'),
            'zoneId'             => getenv('CLOUDFLARE_ZONE_ID'),
            'domain'             => getenv('CLOUDFLARE_DOMAIN')
        ],

        // Dummy driver (default)
        'dummy'      => [
            'tagHeaderName'   => 'X-CacheTag',
            'logPurgeActions' => true,
        ]
    ]
];
