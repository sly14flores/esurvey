<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class PopRespondents extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'populate:respondents';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate respondents for SOPA';

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
		
		for ($i=1; $i<=1000; ++$i) {
			
			$survey = $this->populate();
			
			$response = Http::post(env('APP_URL').'/api/conduct/survey/respondent', [
				'specific' => false,
				'survey' => $survey,
			]);		
		
		}

		// var_dump($response->body());
		
        // return 0;
    }
	
	private function populate() {
		
		$genders = [
			1 => "Male",
			2 => "Female"
		];
		
		$employment_status = [
			1 => "Employed",
			2 => "Self-Employed",
			3 => "Unemployed",
			4 => "Schooling",
			5 => "Retired"
		];
		
		$items = [];
		
		$item = [
			"id"=>1,
			"is_shown"=>true,
			"item_name"=>"Gender",
			"translated"=>"Kasarian",
			"item_type"=>4,
            "text_is_multiple"=>false,
			"values"=>[
				[
					"id"=>1,
					"display"=>"Male",
					"display_translated"=>"Lalaki",
					"siv_value"=>"Male",
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>null,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>1,
					"answer"=>false,
					"other_answer"=>""
				],
				[
					"id"=>2,
					"display"=>"Female",
					"display_translated"=>"Babae",
					"siv_value"=>"Female",
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>null,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>2,
					"answer"=>false,
					"other_answer"=>""
				]
			],
			"answer"=>$genders[rand(1,2)]
		];
		$items[] = $item;		
		
		$item = [
			"id"=>2,
			"required"=>true,
			"is_shown"=>true,
			"item_name"=>"Age",
			"translated"=>"Edad",
			"item_type"=>3,
			"text_is_multiple"=>false,
			"values"=>[
				[
					"id"=>3,
					"display"=>null,
					"display_translated"=>null,
					"siv_value"=>null,
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>2,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>1,
					"answer"=>"",
					"other_answer"=>""
				]
			],
			"answer"=>rand(18,60)
		];
		$items[] = $item;
		
		$item = [
			"id"=>3,
			"required"=>true,
			"is_shown"=>true,
			"item_name"=>"Profession",
			"translated"=>"Propesyon",
			"item_type"=>4,
			"text_is_multiple"=>false,
			"values"=>[
				[
					"id"=>4,
					"display"=>"Employed",
					"display_translated"=>null,
					"siv_value"=>"Employed",
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>3,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>1,
					"answer"=>false,
					"other_answer"=>""
				],
				[
					"id"=>16,
					"display"=>"Self-Employed",
					"display_translated"=>null,
					"siv_value"=>"Self-Employed",
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>null,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>2,
					"answer"=>false,
					"other_answer"=>""
				],
				[
					"id"=>17,
					"display"=>"Unemployed",
					"display_translated"=>null,
					"siv_value"=>"Unemployed",
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>null,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>3,
					"answer"=>false,
					"other_answer"=>""
				],
				[
					"id"=>18,
					"display"=>"Schooling",
					"display_translated"=>null,
					"siv_value"=>"Schooling",
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>null,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>4,
					"answer"=>false,
					"other_answer"=>""
				],
				[
					"id"=>19,
					"display"=>"Retired",
					"display_translated"=>null,
					"siv_value"=>"Retired",
					"siv_value_other"=>false,
					"siv_min"=>null,
					"min_below"=>false,
					"siv_max"=>null,
					"max_above"=>false,
					"data_type"=>null,
					"row_type"=>null,
					"siv_infographic"=>null,
					"highest"=>false,
					"lowest"=>false,
					"required"=>false,
					"sub_items"=>[],
					"index"=>5,
					"answer"=>false,
					"other_answer"=>""
				]
			],
			"answer"=>$employment_status[rand(1,5)]
		];
		$items[] = $item;
		
		$values = [
			[
				"id"=>5,
				"display"=>"Efficient Public Health Service Delivery",
				"display_translated"=>null,
				"siv_value"=>"Efficient Public Health Service Delivery",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>1,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>6,
				"display"=>"Disaster Resilient Communities",
				"display_translated"=>null,
				"siv_value"=>"Disaster Resilient Communities",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>2,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>7,
				"display"=>"Clean and Green Environment",
				"display_translated"=>null,
				"siv_value"=>"Clean and Green Environment",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>3,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>8,
				"display"=>"Sufficient Food Supply",
				"display_translated"=>null,
				"siv_value"=>"Sufficient Food Supply",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>4,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>9,
				"display"=>"Equal Job Opportunities",
				"display_translated"=>null,
				"siv_value"=>"Equal Job Opportunities",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>5,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>10,
				"display"=>"Proactive Social Services",
				"display_translated"=>null,
				"siv_value"=>"Proactive Social Services",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>6,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>11,
				"display"=>"Safe and Secure Citizens",
				"display_translated"=>null,
				"siv_value"=>"Safe and Secure Citizens",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>7,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>12,
				"display"=>"Thriving Local Economy",
				"display_translated"=>null,
				"siv_value"=>"Thriving Local Economy",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>8,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>13,
				"display"=>"Access To Equal Education",
				"display_translated"=>null,
				"siv_value"=>"Access To Equal Education",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>9,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>14,
				"display"=>"Good Governance",
				"display_translated"=>null,
				"siv_value"=>"Good Governance",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>10,
				"answer"=>false,
				"other_answer"=>""
			],
			[
				"id"=>15,
				"display"=>"Rich Tourism, Culture and Arts",
				"display_translated"=>null,
				"siv_value"=>"Rich Tourism, Culture and Arts",
				"siv_value_other"=>false,
				"siv_min"=>null,
				"min_below"=>false,
				"siv_max"=>null,
				"max_above"=>false,
				"data_type"=>null,
				"row_type"=>null,
				"siv_infographic"=>null,
				"highest"=>false,
				"lowest"=>false,
				"required"=>false,
				"sub_items"=>[],
				"index"=>11,
				"answer"=>false,
				"other_answer"=>""
			]
		];
		
		// 5 - 15
		for ($i=1; $i<=3; ++$i) {
			$x = rand(5,15);
			foreach($values as $key => $value) {
				if ($value['id']==$x) {
					$values[$key]['answer'] = true;
				}
			}
		};
		
		$item = [
			"id"=>4,
			"required"=>true,
			"is_shown"=>true,
			"item_name"=>"For you, what makes a Province worth living in?",
			"translated"=>"Para sayo, ano ang dapat meron sa La Union upang ito ay maging isang Province worth living in?",
			"item_type"=>2,
			"text_is_multiple"=>false,
			"values"=>$values,
			"answer"=>null
		];	
		$items[] = $item;	
		
		$sections = [
			[
				'id' => 1,
				'items' => $items,
				'aspects' => []
			]
		];
		
		$survey['id'] = 1;		
		$survey['sections'] = $sections;

		return $survey;
		
	}
}
