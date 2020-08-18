<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Group;
use App\System\Authorizations;

class ManageGroups extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'manage:groups';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Manage groups';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

		$name = $this->ask('Group Name');
		$description = $this->ask('Group Description');
		
		$group = new Group;
		
		$group->name = $name;
		$group->description = $description;
		
		$Authorizations = new Authorizations();
		$template = $Authorizations->template();

		$group->authorization = encrypt($template);

		$group->save();

    }
}
