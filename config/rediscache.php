<?php

// if its local
if (getenv('APP_ENV') == 'local') {
    return [
        'hostname' => getenv('REDIS_HOST') ?: 'redis-server',
        'username' => getenv('REDIS_USER') ?: null,
        'port' => getenv('REDIS_PORT') ?: null,
        'password' => getenv('REDIS_PASS') ?: null,
        'database' => 0,
        'timeout' => null,
    ];
}

// assume production/staging
$redis = parse_url(getenv('REDIS_URL'));

return [
    'hostname' => $redis['host'],
    'username' => $redis['user'],
    'port' => $redis['port'],
    'password' => $redis['pass'],
    'database' => 0,
    'timeout' => null,
];
