<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ModelsIncrement extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'models-increment:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset auto_increment for all models';

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

		$tables = [
			'aiv_sub_items',
			'aspect_items',
			'aspect_item_values',
			'groups',
			'offices',
			'section_aspects',
			'section_items',
			'section_item_values',
			'siv_sub_items',
			'surveys',
			'survey_sections',
			'users',
			'introductions',
			'respondents',
			'section_item_answers',
			'section_item_sub_item_answers',
			'aspect_item_answers',
			'aspect_item_sub_item_answers'
		];
		
		foreach ($tables as $table) {
			
			DB::statement('ALTER TABLE '.$table.' AUTO_INCREMENT = 1');
			$this->info('Reset table: '.$table);		
			
		}

    }
}
