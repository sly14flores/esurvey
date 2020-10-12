<?php

namespace App\Console\Commands\Respondents;

use Illuminate\Console\Command;

use App\Survey;
use App\Respondent;
use App\SectionItemAnswer;
use App\SectionItemValueAnswer;
use App\SectionItemValue;

class UpdateItemValueAnswers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:item-value-answer';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Item Value Answer Foreign Key';

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

        $id = $this->ask('Enter Survey ID');

        $survey_id = intval($id);

        if ($survey_id == 0) 
        {

            $this->info("Invalid input");
            return 0;

        }

        $survey = Survey::find($survey_id);

        if (is_null($survey))
        {

            $this->info("Survey ID doesn't exist");
            return 0;
        }

        $survey_respondents = Respondent::where('survey_id',$survey_id);

        if (is_null($survey_respondents)) 
        {
            $this->info("Survey has no respondents");
            return 0;
        }

        $respondents = $survey_respondents->get();

        foreach ($respondents as $respondent) {

            $respondent_item_answers = SectionItemAnswer::where('respondent_id',$respondent->id);

            if (!is_null($respondent_item_answers)) {

                $item_answers = $respondent_item_answers->get();

                foreach($item_answers as $item_answer) {

                    $section_item_values = SectionItemValue::where('section_item_id',$item_answer->section_item_id);

                    if (!is_null($section_item_values)) {

                        $item_values = $section_item_values->get();

                        foreach ($item_values as $item_value) {

                            $item_value_answer = SectionItemValueAnswer::where([['respondent_id',$respondent->id],['section_item_value_id',$item_value->id]]);

                            if (!is_null($item_value_answer) && !is_null($item_value_answer->first())) {

                                $update_item_value_answer = SectionItemValueAnswer::find($item_value_answer->first()->id);

                                if (!is_null($update_item_value_answer->section_item_answer_id)) continue;

                                $update_item_value_answer->section_item_answer_id = $item_answer->id;

                                $update_item_value_answer->save();

                                $this->info('Update item value answer id: '.$item_value_answer->first()->id);

                            }

                        }

                    }
                    
                }

            }

        }

        return 1;
    }
}
