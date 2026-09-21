<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        config([
            'session.driver' => config('session.driver') ?: 'cookie',
            'cache.default' => config('cache.default') ?: 'array',
            'mail.default' => config('mail.default') ?: 'log',
            'queue.default' => config('queue.default') ?: 'sync',
            'database.default' => config('database.default') ?: 'mysql',
            'logging.default' => config('logging.default') ?: 'stderr',
            'app.maintenance.driver' => config('app.maintenance.driver') ?: 'array',
            'app.maintenance.store' => config('app.maintenance.store') ?: 'array',
        ]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (app()->environment('production') || !empty(env('VERCEL'))) {
            \Illuminate\Support\Facades\URL::forceScheme('https');
        }
    }
}
