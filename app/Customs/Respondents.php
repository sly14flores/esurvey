<?php

namespace App\Customs;

use App\Customs\ItemType;
use App\Survey;
use App\Respondent;

trait Respondents
{

	public function columns($id)
	{

        $columns = [];

		$survey = Survey::find($id);

		$survey_sections = $survey->sections()->get();

		$sii = 0;		

		if ($survey->include_office) {

			$columns[] = array('index'=>++$sii,'value'=>'Office');

		}		

		foreach ($survey_sections as $survey_section) {

			$section_items = $survey_section->items()->get();

			foreach ($section_items as $section_item) {

				if (($section_item->item_type == ItemType::BRACKET)
					|| ($section_item->item_type == ItemType::RADIOS)
					|| ($section_item->item_type == ItemType::SELECTIONS)
					|| ($section_item->item_type == ItemType::SINGLE_ROW)) {

					$columns[] = array('index'=>++$sii,'value'=>$section_item->item_name);

				}

				if (($section_item->item_type == ItemType::TEXT_INPUT)
					&& ($section_item->text_is_multiple == 0)) {

					$columns[] = array('index'=>++$sii,'value'=>$section_item->item_name);

				}

				$item_values = $section_item->values()->get();

				foreach ($item_values as $item_value) {

					if (($section_item->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
					&& ($section_item->text_is_multiple == 1)) {

						// $columns[] = $item_value->display;
						$columns[] = array('index'=>++$sii,'value'=>$item_value->display);

					}
					
					if ($section_item->item_type == ItemType::CHECKBOX) # Checkboxes
					{

						$columns[] = array('index'=>++$sii,'value'=>$item_value->display);

					}						

				}

			}

		}

		$columns[] = array('index'=>++$sii,'value'=>'Date');

        return $columns;
	}

	public function rows($id)
	{

		$survey_respondents = Respondent::where('survey_id', $id);
		$respondents = $survey_respondents->get();

		$rows = [];		

		$iai = 0;

        foreach ($respondents as $respondent) {

			$row = [];

			if ($respondent->office!=null) {

				$row[] = array('name'=>'office','value'=>$respondent->office_name);

			}

            foreach ($respondent->item_answers as $item_answer) {				

				if (($item_answer->item_type == ItemType::BRACKET)
					|| ($item_answer->item_type == ItemType::RADIOS)
					|| ($item_answer->item_type == ItemType::SELECTIONS)
					|| ($item_answer->item_type == ItemType::SINGLE_ROW)) {

					$row[] = array('name'=>$item_answer->item_name,'value'=>$item_answer->answer);

				}

				if (($item_answer->item_type == ItemType::TEXT_INPUT)
					&& ($item_answer->text_is_multiple == 0)) {

					$row[] = array('name'=>$item_answer->item_name,'value'=>$item_answer->answer);

				}				

                foreach ($item_answer->item_value_answers as $item_value_answer) {

					if (($item_answer->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
					&& ($item_answer->text_is_multiple == 1)) {

						$value = (is_null($item_value_answer->answer))?'':$item_value_answer->answer;
						if ($item_value_answer->other_answer!=null) {
							$value = $item_value_answer->other_answer;
						}
						$row[] = array('name'=>$item_value_answer->item_value_name,'value'=>$value);

					}
					
					if ($item_answer->item_type == ItemType::CHECKBOX) # Checkboxes
					{

						$row[] = array('name'=>$item_value_answer->item_value_name,'value'=>(intval($item_value_answer->answer))?'Yes':'No');						

					}

                }

			}

			$row[] = array('name'=>'Date','value'=>$respondent->created_at);
			
			$rows[] = $row;

        }

        return $rows;

	}    

}