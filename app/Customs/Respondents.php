<?php

namespace App\Customs;

use App\Customs\ItemType;
use App\Survey;
use App\Respondent;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\LazyCollection;

trait Respondents
{

	public function get_tags($id,$toggles)
	{

		$user_id = Auth::guard('api')->id();
		$key = "$user_id-$id"."-visible-columns";

		$columns = $this->generateColumns($id);
		$show_hide_columns = collect($columns);

		/*
		if (is_null($show_hide_columns[0]['section']) && is_null($show_hide_columns[0]['item']) && is_null($show_hide_columns[0]['item_value'])) {
			$show_hide_columns = $show_hide_columns->splice(1);
		}
		
		$show_hide_columns = $show_hide_columns->splice(0,$show_hide_columns->count()-1);
		*/
		
		$show_hide_columns = $show_hide_columns->map(function($col) {
			$col['show'] = true;
			return $col;
		});

		$cache = [];

		if (count($toggles['headers'])) {
			if (intval($toggles['id'])==$id) {
				$cache = $toggles;
			} else {
				$cache = array('id'=>$id,'headers'=>$show_hide_columns->toArray());
			}
		} else {
			$cache = array('id'=>$id,'headers'=>$show_hide_columns->toArray());
		}
		Cache::put($key, serialize($cache));		

		$cached_toggles = Cache::get($key);
		$cached_toggles = unserialize($cached_toggles);

		return $cached_toggles;

	}

	private function toggleColumn($id,$field,$toggles)
	{
		$show = true;		

		foreach ($toggles['headers'] as $toggle) {
			$index = $toggle['index'] == $field['index'];
			$section = $toggle['section'] == $field['section'];
			$item = $toggle['item'] == $field['item'];
			$item_value = $toggle['item_value'] == $field['item_value'];

			if ($index && $section && $item && $item_value) {
				$show = $toggle['show'];
				break;
			}
		}

		return $show;
	}

	public function generateColumns($id)
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

	public function columns($id,$toggles)
	{

		$lazy_columns = LazyCollection::make(function() use ($id,$toggles) {

			$survey = Survey::with(['sections','sections.items'])->find($id);

			$survey_sections = $survey->sections()->get();
	
			$sii = 0;			

			if ($survey->include_office) {

				$column = array('index'=>++$sii,'section'=>null,'item'=>null,'item_value'=>null,'value'=>'Office');
				if ($this->toggleColumn($id,$column,$toggles)) yield $column;

			}		

			foreach ($survey_sections as $survey_section) {

				$section_items = $survey_section->items()->get();

				foreach ($section_items as $section_item) {

					if (($section_item->item_type == ItemType::BRACKET)
						|| ($section_item->item_type == ItemType::RADIOS)
						|| ($section_item->item_type == ItemType::SELECTIONS)
						|| ($section_item->item_type == ItemType::SINGLE_ROW)) {

						$column = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>null,'value'=>$section_item->item_name);
						if ($this->toggleColumn($id,$column,$toggles)) yield $column;

					}

					if (($section_item->item_type == ItemType::TEXT_INPUT)
						&& ($section_item->text_is_multiple == 0)) {

						$column = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>null,'value'=>$section_item->item_name);
						if ($this->toggleColumn($id,$column,$toggles)) yield $column;

					}

					$item_values = $section_item->values()->get();

					foreach ($item_values as $item_value) {

						if (($section_item->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
						&& ($section_item->text_is_multiple == 1)) {

							$column = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>$item_value->id,'value'=>$item_value->display);
							if ($this->toggleColumn($id,$column,$toggles)) yield $column;							

						}
						
						if ($section_item->item_type == ItemType::CHECKBOX) # Checkboxes
						{

							$column = array('index'=>++$sii,'section'=>$survey_section->id,'item'=>$section_item->id,'item_value'=>$item_value->id,'value'=>$item_value->display);
							if ($this->toggleColumn($id,$column,$toggles)) yield $column;

						}						

					}

				}

			}

			$column = array('index'=>++$sii,'section'=>null,'item'=>null,'item_value'=>null,'value'=>'Date');
			if ($this->toggleColumn($id,$column,$toggles)) yield $column;

		});

		$columns = $lazy_columns->toArray();

        return $columns;
	
	}

	public function rows($id,$toggles)
	{

		$lazy_rows = LazyCollection::make(function() use ($id,$toggles) {		

			$survey_respondents = Respondent::where('survey_id', $id)->with(['section_item_answers','section_item_value_answers','section_item_sub_item_answers','survey']);
			$respondents = $survey_respondents->get();

			foreach ($respondents as $respondent) {

				$row = [];
				$iai = 0;

				if ($respondent->office!=null) {

					$r = array('index'=>++$iai,'section'=>null,'item'=>null,'item_value'=>null,'name'=>'office','value'=>$respondent->office_name);
					if ($this->toggleColumn($id,$r,$toggles)) $row[] = $r;

				}

				foreach ($respondent->item_answers as $item_answer) {				

					if (($item_answer->item_type == ItemType::BRACKET)
						|| ($item_answer->item_type == ItemType::RADIOS)
						|| ($item_answer->item_type == ItemType::SELECTIONS)
						|| ($item_answer->item_type == ItemType::SINGLE_ROW)) {

						$r = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>null,'name'=>$item_answer->item_name,'value'=>$item_answer->answer);
						if ($this->toggleColumn($id,$r,$toggles)) $row[] = $r;

					}

					if (($item_answer->item_type == ItemType::TEXT_INPUT)
						&& ($item_answer->text_is_multiple == 0)) {

						$r = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>null,'name'=>$item_answer->item_name,'value'=>$item_answer->answer);
						if ($this->toggleColumn($id,$r,$toggles)) $row[] = $r;

					}				

					foreach ($item_answer->item_value_answers as $item_value_answer) {

						if (($item_answer->item_type == ItemType::TEXT_INPUT) # Multiple Text Inputs
						&& ($item_answer->text_is_multiple == 1)) {

							$value = (is_null($item_value_answer->answer))?'':$item_value_answer->answer;
							if ($item_value_answer->other_answer!=null) {
								$value = $item_value_answer->other_answer;
							}
							$r = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>$item_value_answer->item_value,'name'=>$item_value_answer->item_value_name,'value'=>$value);
							if ($this->toggleColumn($id,$r,$toggles)) $row[] = $r;

						}
						
						if ($item_answer->item_type == ItemType::CHECKBOX) # Checkboxes
						{

							$r = array('index'=>++$iai,'section'=>$item_answer->section,'item'=>$item_answer->item,'item_value'=>$item_value_answer->item_value,'name'=>$item_value_answer->item_value_name,'value'=>(intval($item_value_answer->answer))?'Yes':'No');						
							if ($this->toggleColumn($id,$r,$toggles)) $row[] = $r;

						}

					}

				}

				$r = array('index'=>++$iai,'section'=>null,'item'=>null,'item_value'=>null,'name'=>'Date','value'=>$respondent->created_at);
				if ($this->toggleColumn($id,$r,$toggles)) $row[] = $r;				

				yield $row;				

			}

		});

		$rows = $lazy_rows->toArray();		

        return $rows;

	}

}