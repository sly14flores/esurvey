<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TestCodes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:codes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
     * @return int
     */
    public function handle()
    {
        $themes_path = base_path()."\\resources\\views\\conduct\\themes";

        $themes_files = scandir($themes_path);

        $themes = [];
        foreach ($themes_files as $theme_file) {
            if ( ($theme_file==".") || ($theme_file=="..") ) continue;
            $exp = explode(".",$theme_file);
            $themes[] = ["name"=>ucwords($exp[0]),"file"=>$exp[0]];
        }

        return 0;
    }
}
