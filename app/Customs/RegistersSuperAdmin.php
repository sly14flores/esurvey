<?php

namespace App\Customs;

trait RegistersSuperAdmin
{

	/**
	 * Start RegisterSuperAdminCommand
	 */
	
    /**
     * Checks if user is a super admin
     *
     * @return boolean
     */	
    public function isSuperAdmin() : bool
    {
        return (bool) $this->is_super_admin;
    }

    /**
     * Create admin.
     *
     * @param array $details
     * @return array
     */
    public function createSuperAdmin(array $details) : self
    {
        $user = new self($details);

        if (! $this->superAdminExists()) {
            $user->is_super_admin = 1;
        }
		
		$user->email_verified_at = date("Y-m-d H:i:s");
		$user->created_at = date("Y-m-d H:i:s");
		$user->updated_at = date("Y-m-d H:i:s");

        $user->save();

        return $user;
    }

    /**
     * Checks if super admin exists
     *
     * @return integer
     */
    public function superAdminExists() : int
    {
        return self::where('is_super_admin', 1)->count();
    }

	/**
	 * End RegisterSuperAdminCommand
	 */	
	
}

?>