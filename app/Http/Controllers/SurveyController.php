<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Survey;
use App\Introduction;
use App\ThankYou;
use App\PrivacyNotice;
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

use App\Customs\AuthorizationMaps;
use Illuminate\Support\Facades\Gate;

class SurveyController extends Controller
{
	
	use AuthorizationMaps;	
	
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
		Gate::authorize($this->cmpm[__FUNCTION__], Survey::class);			
		
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

		Gate::authorize($this->cmpm[__FUNCTION__], Survey::class);

		// $survey = Survey::create($request->all());
		$survey = new Survey;

		$survey->token = Str::random(10);
		$survey->name = $request->name;
		$survey->description = $request->description;
		$survey->office = $request->office;
		$survey->background = $request->background;
		$survey->left_infographic = $request->left_infographic;
		$survey->right_infographic = $request->right_infographic;
		$survey->include_office = $request->include_office;
		$survey->fullscreen_mobile = $request->fullscreen_mobile;

		$survey->save();
		
		if ($request->introductions!=null) {
			
			foreach ($request->introductions as $introduction) {
				
				$intro = new Introduction($introduction);
				
				$survey->introductions()->save($intro);
				
			}
			
		}

		$thankyou = new ThankYou($request->thankyou);
		$survey->thank_you()->save($thankyou);
		
		$privacynotice = new PrivacyNotice($request->privacy_notice);
		$survey->privacy_notice()->save($privacynotice);

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
		Gate::authorize($this->cmpm[__FUNCTION__], $survey);

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
		
		Gate::authorize($this->cmpm[__FUNCTION__], $survey);		
		
		$survey->name = $request->name;
		$survey->description = $request->description;
		$survey->office = $request->office;
		$survey->background = $request->background;
		$survey->left_infographic = $request->left_infographic;
		$survey->right_infographic = $request->right_infographic;		
		$survey->include_office = $request->include_office;
		$survey->fullscreen_mobile = $request->fullscreen_mobile;
		
		$survey->save();
		
		if ($request->introductions!=null) {
			
			foreach ($request->introductions as $introduction) {
				
				if ($introduction['id']==0) {
					$intro = new Introduction($introduction);
				} else {
					$intro = Introduction::find($introduction['id']);
					$intro->fill($introduction);
				}
				
				$survey->introductions()->save($intro);
				
			}
			
		}		
		
		/**
		 * Thank you
		 */
		if ($request->thankyou['id']>0) { # update
		
			$thankyou = ThankYou::find($request->thankyou['id']);
			$thankyou->fill($request->thankyou);
			$survey->thank_you()->save($thankyou);
		
		} else { # new
		
			$thankyou = new ThankYou($request->thankyou);
			$survey->thank_you()->save($thankyou);
		
		}
		
		/**
		 * Privacy Notice
		 */
		if ($request->privacy_notice['id']>0) { # update
		
			$privacynotice = PrivacyNotice::find($request->privacy_notice['id']);
			$privacynotice->fill($request->privacy_notice);
			$survey->privacy_notice()->save($privacynotice);
		
		} else { # new

			$privacynotice = new PrivacyNotice($request->privacy_notice);
			$survey->privacy_notice()->save($privacynotice);

		}		

		if ($request->sections!=null) {

			foreach ($request->sections as $survey_section) {

				if ($survey_section['id']==0) {
					$section = new SurveySection($survey_section);
				} else {
					$section = SurveySection::find($survey_section['id']);
					$section->fill($survey_section);
				}
				
				$survey->sections()->save($section);

				# Section Items
				if (isset($survey_section['items'])) {

					foreach($survey_section['items'] as $section_item) {
						
						if ($section_item['id']==0) {
							$item = new SectionItem($section_item);
						} else {
							$item = SectionItem::find($section_item['id']);
							$item->fill($section_item);
						}
						
						$section->items()->save($item);
						
						if (isset($section_item['values'])) {
							
							foreach ($section_item['values'] as $section_item_value) {
								
								if ($section_item_value['id']==0) {
									$value = new SectionItemValue($section_item_value);
								} else {
									$value = SectionItemValue::find($section_item_value['id']);
									$value->fill($section_item_value);
								}
								
								$item->values()->save($value);
								
								if (isset($section_item_value['sub_items'])) {
									
									foreach ($section_item_value['sub_items'] as $section_item_sub_item) {

										if ($section_item_sub_item['id']==0) {
											$siv_sub_item = new SivSubItem($section_item_sub_item);
										} else {
											$siv_sub_item = SivSubItem::find($section_item_sub_item['id']);
											$siv_sub_item->fill($section_item_sub_item);
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
							$aspect->fill($section_aspect);
						}

						$section->aspects()->save($aspect);	
						
						if (isset($section_aspect['items'])) {
							
							foreach ($section_aspect['items'] as $section_aspect_item) {

								if ($section_aspect_item['id']==0) {
									$aspect_item = new AspectItem($section_aspect_item);
								} else {
									$aspect_item = AspectItem::find($section_aspect_item['id']);
									$aspect_item->fill($section_aspect_item);
								}

								$aspect->items()->save($aspect_item);
								
								if (isset($section_aspect_item['values'])) {
									
									foreach ($section_aspect_item['values'] as $section_aspect_item_value) {

										if ($section_aspect_item_value['id']==0) {
											$aspect_item_value = new AspectItemValue($section_aspect_item_value);
										} else {
											$aspect_item_value = AspectItemValue::find($section_aspect_item_value['id']);
											$aspect_item_value->fill($section_aspect_item_value);
										}
										
										$aspect_item->values()->save($aspect_item_value);
										
										if (isset($section_aspect_item_value['sub_items'])) {
											
											foreach ($section_aspect_item_value['sub_items'] as $section_aspect_item_value_sub_item) {
												
												if ($section_aspect_item_value_sub_item['id']==0) {
													$aspect_item_value_sub_item = new AivSubItem($section_aspect_item_value_sub_item);
												} else {
													$aspect_item_value_sub_item = AivSubItem::find($section_aspect_item_value_sub_item['id']);
													$aspect_item_value_sub_item->fill($section_aspect_item_value_sub_item);
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
		
		Gate::authorize($this->cmpm[__FUNCTION__], $survey);		
		
        $survey->delete();

        return response()->json();
    }
}
