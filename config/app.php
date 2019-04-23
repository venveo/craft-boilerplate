<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

use yii\redis\Cache;
use yii\redis\Connection;

return [
    'components' => [
        'deprecator' => [
            'throwExceptions' => getenv('ENVIRONMENT') !== 'production',
        ],

        // Configure redis
        'redis' => [
            'class' => yii\redis\Connection::class,
            'hostname' => getenv('REDIS_HOST'),
            'port' => getenv('REDIS_PORT'),
            'database' => getenv('REDIS_DB'),
        ],

        // Use redis as our caching mechanism
        'cache' => [
            // Use database 1 for live production
            'class' => yii\redis\Cache::class,
            'redis' => [
                'hostname' => getenv('REDIS_HOST'),
                'port' => getenv('REDIS_PORT'),
                'database' => getenv('REDIS_DB'),
            ],
        ],

        // Allow our queue jobs to run longer than the default (300)
        'queue' => [
            'ttr' => 1000,
        ],

        // Use redis for session storage
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
        }
    ],
    'modules' => [],
    'bootstrap' => [],
];
