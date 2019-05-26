<?php
return [
    // Global settings
    '*' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => false,
        // The JavaScript entry from the manifest.json to inject on Twig error pages
        'errorEntry' => '',
        // Manifest file names
        'manifest' => [
            'legacy' => 'manifest-legacy.json',
            'modern' => 'manifest.json',
        ],
        // Public server config
        'server' => [
            'manifestPath' => '@webroot/dist/',
            'publicPath' => '/',
        ],
        // webpack-dev-server config
        'devServer' => [
            'manifestPath' => 'http://localhost:8080/',
            'publicPath' => 'http://localhost:8080/',
        ],
        // Local files config
        'localFiles' => [
            'basePath' => '@webroot/',
            'criticalPrefix' => 'dist/criticalcss/',
            'criticalSuffix' => '_critical.min.css',
        ],
    ],
    // Live (production) environment
    'production' => [
    ],
    // Staging (pre-production) environment
    'staging' => [
    ],
    // Local (development) environment
    'dev' => [
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => true,
        // The JavaScript entry from the manifest.json to inject on Twig error pages
        'errorEntry' => 'app.js',
        // webpack-dev-server config
        'devServer' => [
            'manifestPath' => getenv('TWIGPACK_DEV_SERVER_MANIFEST'),
            'publicPath' => getenv('TWIGPACK_DEV_SERVER_PUBLIC'),
        ],
    ],
];
