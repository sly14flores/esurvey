<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Access\Response;

// use App\Policies\UserPolicy;
// use App\User;

use App\System\Authorizations;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        App\UserPolicy::class => App\Policies\UserPolicy::class,
        App\OfficePolicy::class => App\Policies\OfficePolicy::class,
        App\GroupPolicy::class => App\Policies\GroupPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
		
		// Allow all gates for Super Administrator
		Gate::before(function ($user, $ability) {
			if ($user->isSuperAdmin()) {
				return true;
			}
		});
		
		$Authorizations = new Authorizations(Auth::user());
		$gp = $Authorizations->get();

		// Register all gates
		foreach ($gp as $gp_P => $gp_V) {

			foreach ($gp_V['Gates']['Items'] as $Gate_P => $Gate_V) {

				Gate::define($Gate_P, function ($user) use ($Gate_V) {

					return ($Gate_V)
						? Response::allow()
						: Response::deny("You don't have an access to this feature");		

				});
			
			}
			
		}		
		
    }
}
