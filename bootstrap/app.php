<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->trustProxies(at: '*');
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->respond(function ($response, \Throwable $e, Request $request) {
            $output = "EXCEPTION: " . get_class($e) . "\n";
            $output .= "MESSAGE: " . $e->getMessage() . "\n";
            $output .= "LOCATION: " . $e->getFile() . ":" . $e->getLine() . "\n\n";
            $output .= "STACK TRACE:\n";
            foreach ($e->getTrace() as $i => $t) {
                $class = $t['class'] ?? '';
                $type = $t['type'] ?? '';
                $func = $t['function'] ?? '';
                $file = $t['file'] ?? 'unknown';
                $line = $t['line'] ?? '0';
                $args = isset($t['args']) ? substr(json_encode($t['args'], JSON_PARTIAL_OUTPUT_ON_ERROR), 0, 300) : '';
                $output .= "#$i {$class}{$type}{$func}($args) called at [{$file}:{$line}]\n";
            }
            return response($output, 500, ['Content-Type' => 'text/plain; charset=utf-8']);
        });
    })->create();

if ($storagePath = env('APP_STORAGE')) {
    $app->useStoragePath($storagePath);
}

$app->booted(function ($app) {
    if ($app->bound('session')) {
        $app->make('session')->setDefaultDriver('cookie');
    }
    config([
        'session.driver' => 'cookie',
        'cache.default' => 'array',
        'queue.default' => 'sync',
        'mail.default' => 'log',
    ]);
});

return $app;
