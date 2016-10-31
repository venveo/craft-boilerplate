<?php

// Path to your craft/ folder
$craftPath = '../';

// Do not edit below this line
$path = rtrim($craftPath, '/').'/app/index.php';

// attempt to load PHPDotenv from composer
// otherwise assume and set production env
try {
    $dotenv = new Dotenv\Dotenv(dirname(__DIR__));
    $dotenv->load();
    $dotenv->required([
        'APP_CPTRIGGER', 'APP_NAME', 'APP_KEY', 
        'DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASS', 'DB_PREFIX'
    ]);
} catch(\Exception $e) {
    // assume production
    putenv('APP_ENV=production');
}

// define the path the the templates
define('CRAFT_TEMPLATES_PATH', '../resources/templates/');

if (!is_file($path)) {
    if (function_exists('http_response_code')) {
        http_response_code(503);
    }

    exit('Could not find your craft/ folder. Please ensure that <strong><code>$craftPath</code></strong> is set correctly in '.__FILE__);
}

require_once $path;
