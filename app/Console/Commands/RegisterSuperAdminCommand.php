<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class RegisterSuperAdminCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'register:super-admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Register super admin';
	
    /**
     * User model.
     *
     * @var object
     */
    private $user;	

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        parent::__construct();
		
		$this->user = $user;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $details = $this->getDetails();

        $admin = $this->user->createSuperAdmin($details);

        $this->display($admin);
    }
	
    /**
     * Ask for admin details.
     *
     * @return array
     */
    private function getDetails() : array
    {
        $details['firstname'] = $this->ask('Firstname');
        $details['lastname'] = $this->ask('Lastname');
        $details['email'] = $this->ask('Email');
        $details['username'] = $this->ask('Username');
        $details['password'] = $this->secret('Password');
        $details['confirm_password'] = $this->secret('Confirm password');

        while (! $this->isValidPassword($details['password'], $details['confirm_password'])) {
            if (! $this->isRequiredLength($details['password'])) {
                $this->error('Password must be more that six characters');
            }

            if (! $this->isMatch($details['password'], $details['confirm_password'])) {
                $this->error('Password and Confirm password do not match');
            }

            $details['password'] = $this->secret('Password');
            $details['confirm_password'] = $this->secret('Confirm password');
        }

		$details['password'] = Hash::make($details['password']);
		$details['api_token'] = Str::random(80);

        return $details;
    }

    /**
     * Display created admin.
     *
     * @param array $admin
     * @return void
     */
    private function display(User $admin) : void
    {
        $headers = ['Name', 'Email', 'Super admin'];

        $fields = [
            'Name' => $admin->firstname." ".$admin->lastname,
            'email' => $admin->email,
            'admin' => $admin->isSuperAdmin()
        ];

        $this->info('Super admin created');
        $this->table($headers, [$fields]);
    }

    /**
     * Check if password is vailid
     *
     * @param string $password
     * @param string $confirmPassword
     * @return boolean
     */
    private function isValidPassword(string $password, string $confirmPassword) : bool
    {
        return $this->isRequiredLength($password) &&
        $this->isMatch($password, $confirmPassword);
    }

    /**
     * Check if password and confirm password matches.
     *
     * @param string $password
     * @param string $confirmPassword
     * @return bool
     */
    private function isMatch(string $password, string $confirmPassword) : bool
    {
        return $password === $confirmPassword;
    }

    /**
     * Checks if password is longer than six characters.
     *
     * @param string $password
     * @return bool
     */
    private function isRequiredLength(string $password) : bool
    {
        return strlen($password) > 7;
    }
	
}
