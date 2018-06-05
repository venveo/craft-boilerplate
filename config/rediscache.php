<?php

return [
    'hostname' => getenv('REDIS_HOST') ?: 'redis-server',
    'username' => getenv('REDIS_USER') ?: null,
    'port' => getenv('REDIS_PORT') ?: null,
    'password' => getenv('REDIS_PASS') ?: null,
    'database' => 0,
    'timeout' => null,
];
