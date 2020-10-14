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

		foreach ($survey_sections as $survey_section) {

			$section_items = $survey_section->items()->get();

			foreach ($section_items as $section_item) {

				if (($section_item->item_type == ItemType::BRACKET)
					|| ($section_item->item_type == ItemType::RADIOS)
					|| ($section_item->item_type == ItemType::SELECTIONS)
					|| ($section_item->item_type == ItemType::SINGLE_ROW)) {

					$columns[] = $section_item->item_name;

				}

				if (($section_item->item_type == ItemType::TEXT_INPUT)
					&& ($section_item->text_is_multiple == 0)) {

					$columns[] = $section_item->item_name;

				}

				$item_values = $section_item->values()->get();

				foreach ($item_values as $item_value) {

					if (($section_item->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
					&& ($section_item->text_is_multiple == 1)) {

					    $columns[] = $item_value->display;

					}
					
					if ($section_item->item_type == ItemType::CHECKBOX) # Checkboxes
					{

						$columns[] = $item_value->display;

					}						

				}

			}

		}

        return $columns;
	}

	public function rows($id)
	{

		$survey_respondents = Respondent::where('survey_id', $id);
		$respondents = $survey_respondents->get();

		$rows = [];		

        foreach ($respondents as $respondent) {

			$row = [];

            foreach ($respondent->item_answers as $item_answer) {				

				if (($item_answer->item_type == ItemType::BRACKET)
					|| ($item_answer->item_type == ItemType::RADIOS)
					|| ($item_answer->item_type == ItemType::SELECTIONS)
					|| ($item_answer->item_type == ItemType::SINGLE_ROW)) {

					$row[] = $item_answer->answer;

				}

				if (($item_answer->item_type == ItemType::TEXT_INPUT)
					&& ($item_answer->text_is_multiple == 0)) {

					$row[] = $item_answer->answer;

				}				

                foreach ($item_answer->item_value_answers as $item_value_answer) {

					if (($item_answer->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
					&& ($item_answer->text_is_multiple == 1)) {

						$row[] = (is_null($item_value_answer->answer))?'':$item_value_answer->answer;

					}
					
					if ($item_answer->item_type == ItemType::CHECKBOX) # Checkboxes
					{

						$row[] = (intval($item_value_answer->answer))?true:false;

					}

                }

			}
			
			$rows[] = $row;

        }

        return $rows;

	}    

}