<?php

namespace App\Customs;

use App\Customs\ItemType;
use App\Survey;
use App\Respondent;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

trait Respondents
{

	public function get_tags($id,$toggles)
	{

		$user_id = Auth::guard('api')->id();
		$key = "$user_id-$id"."-visible-columns";

		$columns = $this->columns($id);
		$show_hide_columns = collect($columns);		

		if (is_null($show_hide_columns[0]['section']) && is_null($show_hide_columns[0]['item']) && is_null($show_hide_columns[0]['item_value'])) {
			$show_hide_columns = $show_hide_columns->splice(1);
		}
		
		$show_hide_columns = $show_hide_columns->splice(0,$show_hide_columns->count()-1);
		
		$show_hide_columns = $show_hide_columns->map(function($col) {
			$col['show'] = true;
			return $col;
		});

		if (count($toggles)) {
			Cache::put($key, serialize($toggles));
		} else {
			Cache::put($key, serialize($show_hide_columns));			
		}

		$cached_toggles = Cache::get($key);	
		$cached_toggles = unserialize($cached_toggles);

		return $cached_toggles;

	}

	public function columns($id)
	{

        $columns = [];

		$survey = Survey::find($id);

		$survey_sections = $survey->sections()->get();

		$sii = 0;		

		if ($survey->include_office) {

			$columns[] = array('index'=>++$sii,'section'=>null,'item'=>null,'item_value'=>null,'value'=>'Office');

		}		

		foreach ($survey_sections as $survey_section) {

			$section_items = $survey_section->items()->get();

			foreach ($section_items as $section_item) {

				if (($section_item->item_type == ItemType::BRACKET)
					|| ($section_item->item_type == ItemType::RADIOS)
					|| ($section_item->item_type == ItemType::SELECTIONS)
					|| ($section_item->item_type == ItemType::SINGLE_ROW)) {

					$columns[] = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>null,'value'=>$section_item->item_name);

				}

				if (($section_item->item_type == ItemType::TEXT_INPUT)
					&& ($section_item->text_is_multiple == 0)) {

					$columns[] = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>null,'value'=>$section_item->item_name);

				}

				$item_values = $section_item->values()->get();

				foreach ($item_values as $item_value) {

					if (($section_item->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
					&& ($section_item->text_is_multiple == 1)) {

						// $columns[] = $item_value->display;
						$columns[] = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>$item_value->id,'value'=>$item_value->display);

					}
					
					if ($section_item->item_type == ItemType::CHECKBOX) # Checkboxes
					{

						$columns[] = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>$item_value->id,'value'=>$item_value->display);

					}						

				}

			}

		}

		$columns[] = array('index'=>++$sii,'section'=>null,'item'=>null,'item_value'=>null,'value'=>'Date');

        return $columns;
	
	}

	public function rows($id)
	{

		$survey_respondents = Respondent::where('survey_id', $id);
		$respondents = $survey_respondents->get();

		$rows = [];

        foreach ($respondents as $respondent) {

			$row = [];
			$iai = 0;

			if ($respondent->office!=null) {

				$row[] = array('index'=>++$iai,'section'=>null,'item'=>null,'item_value'=>null,'name'=>'office','value'=>$respondent->office_name);

			}

            foreach ($respondent->item_answers as $item_answer) {				

				if (($item_answer->item_type == ItemType::BRACKET)
					|| ($item_answer->item_type == ItemType::RADIOS)
					|| ($item_answer->item_type == ItemType::SELECTIONS)
					|| ($item_answer->item_type == ItemType::SINGLE_ROW)) {

					$row[] = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>null,'name'=>$item_answer->item_name,'value'=>$item_answer->answer);

				}

				if (($item_answer->item_type == ItemType::TEXT_INPUT)
					&& ($item_answer->text_is_multiple == 0)) {

					$row[] = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>null,'name'=>$item_answer->item_name,'value'=>$item_answer->answer);

				}				

                foreach ($item_answer->item_value_answers as $item_value_answer) {

					if (($item_answer->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
					&& ($item_answer->text_is_multiple == 1)) {

						$value = (is_null($item_value_answer->answer))?'':$item_value_answer->answer;
						if ($item_value_answer->other_answer!=null) {
							$value = $item_value_answer->other_answer;
						}
						$row[] = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>$item_value_answer->item_value,'name'=>$item_value_answer->item_value_name,'value'=>$value);

					}
					
					if ($item_answer->item_type == ItemType::CHECKBOX) # Checkboxes
					{

						$row[] = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>$item_value_answer->item_value,'name'=>$item_value_answer->item_value_name,'value'=>(intval($item_value_answer->answer))?'Yes':'No');						

					}

                }

			}

			$row[] = array('index'=>++$iai,'section'=>null,'item'=>null,'item_value'=>null,'name'=>'Date','value'=>$respondent->created_at);
			
			$rows[] = $row;

        }

        return $rows;

	}    

}