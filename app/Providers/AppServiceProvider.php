<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use App\System\Authorizations;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

		// Register Dynamic Gate Blade
		Blade::if('gate', function ($model, $gate) {

			$Authorizations = new Authorizations(Auth::user());
			$gp = $Authorizations->get();			
			
			if (!isset($gp[$model])) {
				$access = false;
			} else {
				if (!isset($gp[$model]['Gates']['Items'][$gate])) $access = false;
				else $access = $gp[$model]['Gates']['Items'][$gate];
			}
			
			if (Auth::user()->isSuperAdmin()) return true;			
			
			return $access;
			
		});

    }
}
