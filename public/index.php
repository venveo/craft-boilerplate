<?php

// Path to your craft/ folder
$craftPath = '../';

// Do not edit below this line
$path = rtrim($craftPath, '/') . '/app/index.php';

// require composer autoload
require_once dirname(__DIR__) . '/vendor/autoload.php';

// if APP_ENV is defined, assume production
if (is_null(getenv('APP_ENV')) || getenv('APP_ENV') == 'local') {
    try {
        $dotenv = new \Dotenv\Dotenv(dirname(__DIR__));
        $dotenv->load();
    } catch (Exception $e) {
        exit('Missing the environment configuration');
    }
}

// define the path the the templates
define('CRAFT_TEMPLATES_PATH', '../resources/templates/');

if (!is_file($path)) {
    if (function_exists('http_response_code')) {
        http_response_code(503);
    }

    exit('Could not find your craft/ folder. Please ensure that <strong><code>$craftPath</code></strong> is set correctly in ' . __FILE__);
}

require_once $path;
