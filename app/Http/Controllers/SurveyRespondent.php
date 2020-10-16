<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

use App\Respondent;
use App\SectionItemAnswer;
use App\SectionItemValueAnswer;
use App\SectionItemSubItemAnswer;
use App\AspectItemAnswer;
use App\AspectItemSubItemAnswer;

use App\Http\Resources\RespondentResource;
use App\Customs\Respondents;

class SurveyRespondent extends Controller
{

	use Respondents;

	public function update(Request $request)
	{

		$survey = $request->survey;
		$specific = $request->specific;

		$respondent = new Respondent;
		$respondent->survey_id = $survey['id'];

		if ($specific) {
			$respondent->office = $request->office;
		}

		$respondent->save();

		foreach ($survey['sections'] as $section) {
			
			foreach ($section['aspects'] as $section_aspect) {

				foreach ($section_aspect['items'] as $section_aspect_item) {

					$section_aspect_item['aspect_item_id'] = $section_aspect_item['id'];
					$section_item_answer = new AspectItemAnswer($section_aspect_item);
					$respondent->aspect_item_answers()->save($section_item_answer);
					
					# aspect item value answers
					
					# section aspect item sub item
					
				}
				
			}
			
			foreach ($section['items'] as $section_item) {

				if (!$section_item['is_shown']) continue;
				
				$section_item['section_item_id'] = $section_item['id'];
				$section_item_answer = new SectionItemAnswer($section_item);
				$respondent->section_item_answers()->save($section_item_answer);

				# section item value answers
				if ( ($section_item['item_type']==2) || (($section_item['item_type']==3)&&($section_item['text_is_multiple'])) ) {
					
					foreach ($section_item['values'] as $section_item_value) {
						
						$section_item_value['section_item_value_id'] = $section_item_value['id'];
						$section_item_value['section_item_answer_id'] = $section_item_answer->id;
						$section_item_value_answer = new SectionItemValueAnswer($section_item_value);
						$respondent->section_item_value_answers()->save($section_item_value_answer);
						
					}

				}
				
				# section item sub item
				
			}
			
		}
		
	}

	public function show(Request $request, $survey_id)
	{

		$this->columns($survey_id);

		$columns = $this->columns($survey_id);
		$responses = $this->rows($survey_id);

		$page = (is_null($request->page))?1:$request->page;
		$rows = $this->paginate($responses, 25, $page);

		$data = ['columns'=>$columns,'rows'=>$rows->toArray()];

		return $data;

	}

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function paginate($items, $perPage = 5, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }	

}
