<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app/main.php and [web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 */

return [

    // All environments
    '*' => [
        'modules' => [
            'site-module' => [
                'class' => \modules\sitemodule\SiteModule::class,
            ],
        ],
        'bootstrap' => ['site-module'],

        'components' => [
            // Default to database 0, so PHP sessions are in a separate database
            'redis' => [
                'class' => yii\redis\Connection::class,
                'hostname' => getenv('REDIS_HOST'),
                'port' => getenv('REDIS_PORT'),
                'database' => getenv('REDIS_DB'),
            ],
            'cache' => [
                // Use database 1 for live production
                'class' => yii\redis\Cache::class,
                'redis' => [
                    'hostname' => getenv('REDIS_HOST'),
                    'port' => getenv('REDIS_PORT'),
                    'database' => getenv('REDIS_DB'),
                ],
            ],
            'session' => function () {
                $stateKeyPrefix = md5('Craft.' . craft\web\Session::class . '.' . Craft::$app->id);
                /** @var yii\redis\Session $session */
                $session = Craft::createObject([
                    'class' => yii\redis\Session::class,
                    'flashParam' => $stateKeyPrefix . '__flash',
                    'name' => Craft::$app->getConfig()->getGeneral()->phpSessionName,
                    'cookieParams' => Craft::cookieConfig(),
                ]);
                $session->attachBehaviors([craft\behaviors\SessionBehavior::class]);
                return $session;
            },
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
        'components' => [
            'deprecator' => [
                'throwExceptions' => true,
            ],
        ]
    ],
];
