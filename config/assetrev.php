<?php
$manifestFile = CRAFT_BASE_PATH.'/web/mix-manifest.json';

return [
    'strategies' => [
        'manifest' => \club\assetrev\utilities\strategies\ManifestFileStrategy::class,
        'querystring' => \club\assetrev\utilities\strategies\QueryStringStrategy::class,
        'passthrough' => function($filename, $config) {
            return $filename;
        },
    ],
    'pipeline' => 'manifest|querystring|passthrough',
    'manifestPath' => $manifestFile,
    'assetUrlPrefix' => '@web'
];
