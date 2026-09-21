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
        if (empty(config('session.driver'))) {
            config(['session.driver' => 'cookie']);
        }
        if (empty(config('cache.default'))) {
            config(['cache.default' => 'array']);
        }
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
