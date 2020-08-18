<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Survey;
use App\Introduction;
use App\SurveySection;
use App\SectionItem;
use App\SectionItemValue;
use App\SivSubItem;
use App\SectionAspect;
use App\AspectItem;
use App\AspectItemValue;
use App\AivSubItem;

use App\Http\Resources\SurveyResource;
use App\Http\Resources\SurveyCollection;

class SurveyController extends Controller
{
	
	public function __construct()
	{
		$this->middleware('auth:api');
	}	
	
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new SurveyCollection(Survey::paginate(15));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

		// $survey = Survey::create($request->all());
		$survey = new Survey;

		$survey->token = Str::random(10);		
		$survey->name = $request->name;
		$survey->description = $request->description;
		$survey->office = $request->office;

		$survey->save();
		
		if ($request->introductions!=null) {
			
			foreach ($request->introductions as $introduction) {
				
				$intro = new Introduction($introduction);
				
				$survey->introductions()->save($intro);
				
			}
			
		}

		if ($request->sections!=null) {

			foreach ($request->sections as $survey_section) {

				$section = new SurveySection($survey_section);

				$survey->sections()->save($section);

				# Section Items
				if (isset($survey_section['items'])) {

					foreach($survey_section['items'] as $section_item) {
						
						$item = new SectionItem($section_item);
						$section->items()->save($item);
						
						if (isset($section_item['values'])) {
							
							foreach ($section_item['values'] as $section_item_value) {
								
								$value = new SectionItemValue($section_item_value);
								$item->values()->save($value);
								
								if (isset($section_item_value['sub_items'])) {
									
									foreach ($section_item_value['sub_items'] as $section_item_sub_item) {

										$siv_sub_item = new SivSubItem($section_item_sub_item);
										$value->items()->save($siv_sub_item);

									}
									
								}
								
							}
							
						}
						
					}
				
				}
				
				# Section Aspects
				if (isset($survey_section['aspects'])) {
					
					foreach ($survey_section['aspects'] as $section_aspect) {

						$aspect = new SectionAspect($section_aspect);

						$section->aspects()->save($aspect);	
						
						if (isset($section_aspect['items'])) {
							
							foreach ($section_aspect['items'] as $section_aspect_item) {

								$aspect_item = new AspectItem($section_aspect_item);
								$aspect->items()->save($aspect_item);
								
								if (isset($section_aspect_item['values'])) {
									
									foreach ($section_aspect_item['values'] as $section_aspect_item_value) {

										$aspect_item_value = new AspectItemValue($section_aspect_item_value);
										$aspect_item->values()->save($aspect_item_value);
										
										if (isset($section_aspect_item_value['sub_items'])) {
											
											foreach ($section_aspect_item_value['sub_items'] as $section_aspect_item_value_sub_item) {
												
												$aspect_item_value_sub_item = new AivSubItem($section_aspect_item_value_sub_item);
												$aspect_item_value->items()->save($aspect_item_value_sub_item);
												
											}
											
										}
									
									}
									
								}
							
							}
							
						}
					
					}
					
				}

			}

		}

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Survey $survey)
    {
        return new SurveyResource($survey);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		
		$survey = Survey::find($id);
		
		$survey->name = $request->name;
		$survey->description = $request->description;
		$survey->office = $request->office;
		
		$survey->save();
		
		if ($request->introductions!=null) {
			
			foreach ($request->introductions as $introduction) {
				
				if ($introduction['id']==0) {
					$intro = new Introduction($introduction);
				} else {
					$intro = Introduction::find($introduction['id']);
					$intro->content = $introduction['content'];
					$intro->translated = $introduction['translated'];
				}
				
				$survey->introductions()->save($intro);
				
			}
			
		}		
		
		if ($request->sections!=null) {

			foreach ($request->sections as $survey_section) {

				if ($survey_section['id']==0) {
					$section = new SurveySection($survey_section);
				} else {
					$section = SurveySection::find($survey_section['id']);
					$section->section_name = $survey_section['section_name'];
					$section->translated = $survey_section['translated'];
				}
				
				$survey->sections()->save($section);

				# Section Items
				if (isset($survey_section['items'])) {

					foreach($survey_section['items'] as $section_item) {
						
						if ($section_item['id']==0) {
							$item = new SectionItem($section_item);
						} else {
							$item = SectionItem::find($section_item['id']);
							$item->required = $section_item['required'];
							$item->item_name = $section_item['item_name'];
							$item->translated = $section_item['translated'];
							$item->item_type = $section_item['item_type'];
							$item->item_presentation = $section_item['item_presentation'];
							$item->item_infographic = $section_item['item_infographic'];
							$item->use_images = $section_item['use_images'];
							$item->text_is_multiple = $section_item['text_is_multiple'];
						}
						
						$section->items()->save($item);
						
						if (isset($section_item['values'])) {
							
							foreach ($section_item['values'] as $section_item_value) {
								
								if ($section_item_value['id']==0) {
									$value = new SectionItemValue($section_item_value);
								} else {
									$value = SectionItemValue::find($section_item_value['id']);
									$value->display = $section_item_value['display'];
									$value->display_translated = $section_item_value['display_translated'];
									$value->siv_value = $section_item_value['siv_value'];
									$value->siv_value_other = $section_item_value['siv_value_other'];
									$value->siv_min = $section_item_value['siv_min'];
									$value->min_below = $section_item_value['min_below'];
									$value->siv_max = $section_item_value['siv_max'];
									$value->max_above = $section_item_value['max_above'];
									$value->data_type = $section_item_value['data_type'];
									$value->row_type = $section_item_value['row_type'];
									$value->siv_infographic = $section_item_value['siv_infographic'];
									$value->highest = $section_item_value['highest'];
									$value->lowest = $section_item_value['lowest'];
									$value->required = $section_item_value['required'];
								}
								
								$item->values()->save($value);
								
								if (isset($section_item_value['sub_items'])) {
									
									foreach ($section_item_value['sub_items'] as $section_item_sub_item) {

										if ($section_item_sub_item['id']==0) {
											$siv_sub_item = new SivSubItem($section_item_sub_item);
										} else {
											$siv_sub_item = SivSubItem::find($section_item_sub_item['id']);
											$siv_sub_item->display = $section_item_sub_item['display'];
											$siv_sub_item->display_translated = $section_item_sub_item['display_translated'];
											$siv_sub_item->vsi_value = $section_item_sub_item['vsi_value'];
											$siv_sub_item->vsi_value_other = $section_item_sub_item['vsi_value_other'];
											$siv_sub_item->vsi_min = $section_item_sub_item['vsi_min'];
											$siv_sub_item->min_below = $section_item_sub_item['min_below'];
											$siv_sub_item->vsi_max = $section_item_sub_item['vsi_max'];
											$siv_sub_item->max_above = $section_item_sub_item['max_above'];
											// $siv_sub_item->data_type = $section_item_sub_item['data_type'];
										}

										$value->items()->save($siv_sub_item);

									}
									
								}
								
							}
							
						}
						
					}
				
				}
				
				# Section Aspects
				if (isset($survey_section['aspects'])) {
					
					foreach ($survey_section['aspects'] as $section_aspect) {

						if ($section_aspect['id']==0) {
							$aspect = new SectionAspect($section_aspect);
						} else {
							$aspect = SectionAspect::find($section_aspect['id']);
							$aspect->aspect_name = $section_aspect['aspect_name'];
							$aspect->translated = $section_aspect['translated'];
						}

						$section->aspects()->save($aspect);	
						
						if (isset($section_aspect['items'])) {
							
							foreach ($section_aspect['items'] as $section_aspect_item) {

								if ($section_aspect_item['id']==0) {
									$aspect_item = new AspectItem($section_aspect_item);
								} else {
									$aspect_item = AspectItem::find($section_aspect_item['id']);
									$aspect_item->required = $section_aspect_item['required'];
									$aspect_item->item_name = $section_aspect_item['item_name'];
									$aspect_item->translated = $section_aspect_item['translated'];
									$aspect_item->item_type = $section_aspect_item['item_type'];
									$aspect_item->item_presentation = $section_aspect_item['item_presentation'];
									$aspect_item->item_infographic = $section_aspect_item['item_infographic'];
									$aspect_item->use_images = $section_aspect_item['use_images'];									
									$aspect_item->text_is_multiple = $section_aspect_item['text_is_multiple'];									
								}
								
								$aspect->items()->save($aspect_item);
								
								if (isset($section_aspect_item['values'])) {
									
									foreach ($section_aspect_item['values'] as $section_aspect_item_value) {

										if ($section_aspect_item_value['id']==0) {
											$aspect_item_value = new AspectItemValue($section_aspect_item_value);
										} else {
											$aspect_item_value = AspectItemValue::find($section_aspect_item_value['id']);
											$aspect_item_value->display = $section_aspect_item_value['display'];
											$aspect_item_value->display_translated = $section_aspect_item_value['display_translated'];
											$aspect_item_value->siv_value = $section_aspect_item_value['siv_value'];
											$aspect_item_value->siv_value_other = $section_aspect_item_value['siv_value_other'];
											$aspect_item_value->siv_min = $section_aspect_item_value['siv_min'];
											$aspect_item_value->min_below = $section_aspect_item_value['min_below'];
											$aspect_item_value->siv_max = $section_aspect_item_value['siv_max'];
											$aspect_item_value->max_above = $section_aspect_item_value['max_above'];
											$aspect_item_value->data_type = $section_aspect_item_value['data_type'];
											$aspect_item_value->row_type = $section_aspect_item_value['row_type'];
											$aspect_item_value->siv_infographic = $section_aspect_item_value['siv_infographic'];
											$aspect_item_value->highest = $section_aspect_item_value['highest'];
											$aspect_item_value->lowest = $section_aspect_item_value['lowest'];
											$aspect_item_value->required = $section_aspect_item_value['required'];
										}
										
										$aspect_item->values()->save($aspect_item_value);
										
										if (isset($section_aspect_item_value['sub_items'])) {
											
											foreach ($section_aspect_item_value['sub_items'] as $section_aspect_item_value_sub_item) {
												
												if ($section_aspect_item_value_sub_item['id']==0) {
													$aspect_item_value_sub_item = new AivSubItem($section_aspect_item_value_sub_item);
												} else {
													$aspect_item_value_sub_item = AivSubItem::find($section_aspect_item_value_sub_item['id']);
													$aspect_item_value_sub_item->display = $section_aspect_item_value_sub_item['display'];
													$aspect_item_value_sub_item->display_translated = $section_aspect_item_value_sub_item['display_translated'];
													$aspect_item_value_sub_item->vsi_value = $section_aspect_item_value_sub_item['vsi_value'];
													$aspect_item_value_sub_item->vsi_value_other = $section_aspect_item_value_sub_item['vsi_value_other'];
													$aspect_item_value_sub_item->vsi_min = $section_aspect_item_value_sub_item['vsi_min'];
													$aspect_item_value_sub_item->min_below = $section_aspect_item_value_sub_item['min_below'];
													$aspect_item_value_sub_item->vsi_max = $section_aspect_item_value_sub_item['vsi_max'];
													$aspect_item_value_sub_item->max_above = $section_aspect_item_value_sub_item['max_above'];
													// $aspect_item_value_sub_item->data_type = $section_aspect_item_value_sub_item['data_type'];
												}
												
												$aspect_item_value->items()->save($aspect_item_value_sub_item);
												
											}
											
										}
									
									}
									
								}
							
							}
							
						}
					
					}
					
				}

			}

		}
		
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $survey = Survey::find($id);		
		
        $survey->delete();

        return response()->json();
    }
}
