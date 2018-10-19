<?php

// We're gonna use S3 for our image transforms.
return [
    'imagerUrl' => getenv('ASSETS_BASE_URL') . '/transforms/',
    'imagerSystemPath' => '@storage/imager',
    'removeMetadata' => true,
    'storages' => ['aws'],
    'transformer' => 'craft',
    'interlace' => 'line',
    'storageConfig' => [
        'aws' => [
            'accessKey' => getenv('AWS_KEY_ID'),
            'secretAccessKey' => getenv('AWS_SECRET'),
            'region' => getenv('AWS_REGION'),
            'bucket' => getenv('AWS_S3_BUCKET'),
            'folder' => 'transforms',
            'requestHeaders' => array(),
            'storageType' => 'standard',
            'cloudfrontInvalidateEnabled' => true,
            'cloudfrontDistributionId' => getenv('AWS_CF_ID'),
        ]
    ]
];
