<?php

// Setup writable storage and cache directory for Vercel Serverless
$storagePath = '/tmp/storage';

$dirs = [
    $storagePath . '/framework/views',
    $storagePath . '/framework/cache/data',
    $storagePath . '/framework/sessions',
    $storagePath . '/framework/testing',
    $storagePath . '/logs',
    $storagePath . '/bootstrap/cache',
];

foreach ($dirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
}

$envs = [
    'APP_STORAGE' => $storagePath,
    'VIEW_COMPILED_PATH' => $storagePath . '/framework/views',
    'APP_CONFIG_CACHE' => $storagePath . '/bootstrap/cache/config.php',
    'APP_SERVICES_CACHE' => $storagePath . '/bootstrap/cache/services.php',
    'APP_PACKAGES_CACHE' => $storagePath . '/bootstrap/cache/packages.php',
    'APP_ROUTES_CACHE' => $storagePath . '/bootstrap/cache/routes.php',
    'APP_EVENTS_CACHE' => $storagePath . '/bootstrap/cache/events.php',
    'SESSION_DRIVER' => 'cookie',
    'CACHE_STORE' => 'array',
    'LOG_CHANNEL' => 'stderr',
];

foreach ($envs as $k => $v) {
    putenv("{$k}={$v}");
    $_ENV[$k] = $v;
    $_SERVER[$k] = $v;
}

try {
    // Forward request to Laravel public/index.php
    require __DIR__ . '/../public/index.php';
} catch (\Throwable $e) {
    http_response_code(500);
    header('Content-Type: text/html; charset=utf-8');
    echo '<div style="font-family:sans-serif;padding:2rem;background:#1a1a1a;color:#fff;">';
    echo '<h1 style="color:#ff5555;">500 Internal Server Error</h1>';
    echo '<p><strong>Message:</strong> ' . htmlspecialchars($e->getMessage()) . '</p>';
    echo '<p><strong>Location:</strong> ' . htmlspecialchars($e->getFile()) . ':' . $e->getLine() . '</p>';
    echo '<h3 style="margin-top:1.5rem;">Stack Trace:</h3>';
    echo '<pre style="background:#2d2d2d;padding:1rem;border-radius:6px;overflow:auto;font-size:13px;">' . htmlspecialchars($e->getTraceAsString()) . '</pre>';
    echo '</div>';
}
