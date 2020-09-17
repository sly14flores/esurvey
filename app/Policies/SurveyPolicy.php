<?php

namespace App\Policies;

use App\Survey;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

use App\System\Authorizations;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;

class SurveyPolicy
{
    use HandlesAuthorization;

	private static $m;
	private static $gp;

	public function __construct()
	{
		self::$m = "Survey";
		
		$Authorizations = new Authorizations(Auth::user());
		self::$gp = $Authorizations->get();
	}
	
	public function before($user, $ability)
	{
		if ($user->isSuperAdmin()) {
			return true;
		}
	}

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return (self::$gp[self::$m]['Policies']['Items'][__FUNCTION__])
			? Response::allow()
			: Response::deny("You don't have an access to this feature");
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Survey  $survey
     * @return mixed
     */
    public function view(User $user, Survey $survey)
    {
        return (self::$gp[self::$m]['Policies']['Items'][__FUNCTION__])
			? Response::allow()
			: Response::deny("You don't have an access to this feature");
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (self::$gp[self::$m]['Policies']['Items'][__FUNCTION__])
			? Response::allow()
			: Response::deny("You don't have an access to this feature");
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Survey  $survey
     * @return mixed
     */
    public function update(User $user, Survey $survey)
    {
        return (self::$gp[self::$m]['Policies']['Items'][__FUNCTION__])
			? Response::allow()
			: Response::deny("You don't have an access to this feature");
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Survey  $survey
     * @return mixed
     */
    public function delete(User $user, Survey $survey)
    {
        return (self::$gp[self::$m]['Policies']['Items'][__FUNCTION__])
			? Response::allow()
			: Response::deny("You don't have an access to this feature");
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Survey  $survey
     * @return mixed
     */
    public function restore(User $user, Survey $survey)
    {
        return (self::$gp[self::$m]['Policies']['Items'][__FUNCTION__])
			? Response::allow()
			: Response::deny("You don't have an access to this feature");
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Survey  $survey
     * @return mixed
     */
    public function forceDelete(User $user, Survey $survey)
    {
        return (self::$gp[self::$m]['Policies']['Items'][__FUNCTION__])
			? Response::allow()
			: Response::deny("You don't have an access to this feature");
    }
}
