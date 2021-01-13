<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class SurveyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
		
        // return parent::toArray($request);
		
		$introductions = $this->introductions()->get(['id','content','translated']);
		
		foreach ($introductions as $n => $introduction) {
			
			$introductions[$n]['index'] = $n+1;
			$introductions[$n]['item_type'] = $introduction->itemType();
			$introductions[$n]['required'] = $introduction->required();
			
		}
		
		$sections = $this->sections()->get(['id','section_name','translated','is_hidden']);
		
		foreach ($sections as $si => $section) {
			
			$items = $section->items()->get([
				'id',
				'required',
				'is_shown',
				'item_name',
				'translated',
				'item_type',
				'item_presentation',
				'max_checkbox_selections',
				'item_infographic',
				'item_infographic_left',
				'item_infographic_right',
				'item_infographic_bottom_logo',	
				'use_images',
				'text_is_multiple'
			]);
			
			foreach ($items as $ii => $item) {
				
				$values = $item->values()->get([
					'id',
					'display',
					'display_translated',
					'siv_value',
					'siv_value_other',
					'siv_min',
					'min_below',
					'siv_max',
					'max_above',
					'data_type',
					'row_type',
					'siv_infographic',
					'highest',
					'lowest',
					'required'
				]);
				
				foreach ($values as $vi => $value) {
					
					$sub_items = $value->items()->get([
						'id',
						'display',
						'display_translated',
						'vsi_value',
						'vsi_value_other',
						'vsi_min',
						'min_below',
						'vsi_max',
						'max_above'			
					]);
					
					foreach ($sub_items as $sii => $sub_item) {
						
						$sub_items[$sii]['index'] = $sii+1;
						
					}
					
					$values[$vi]['sub_items'] = $sub_items;
					$values[$vi]['index'] = $vi+1;
					
					$item_value_answer = ($item['item_type'] == 3)?"":false;
					
					$values[$vi]['answer'] = $item_value_answer;
					$values[$vi]['other_answer'] = "";
					
				}
				
				$items[$ii]['values'] = $values;
				$items[$ii]['is_text'] = $item['item_type'] == 3;
				$items[$ii]['has_presentation'] = $item['item_type'] == 6;
				$items[$ii]['values_invalid'] = false;
				$items[$ii]['index'] = $ii+1;
				$items[$ii]['answer'] = null;

			}
			
			$sections[$si]['items'] = $items;
			$sections[$si]['index'] = $si+1;
			
			$aspects = $section->aspects()->get(['id','aspect_name','translated']);
			
			foreach ($aspects as $ai => $aspect) {
				
				$aspect_items = $aspect->items()->get([
					'id',
					'required',
					'item_name',
					'is_shown',
					'translated',
					'item_type',
					'item_presentation',
					'max_checkbox_selections',
					'item_infographic',
					'item_infographic_left',
					'item_infographic_right',
					'item_infographic_bottom_logo',						
					'use_images',
					'text_is_multiple'
				]);
				
				foreach ($aspect_items as $aii => $aspect_item) {
					
					$aspect_item_values = $aspect_item->values()->get([
						'id',
						'display',
						'display_translated',
						'siv_value',
						'siv_value_other',
						'siv_min',
						'min_below',
						'siv_max',
						'max_above',
						'data_type',
						'row_type',
						'siv_infographic',
						'highest',
						'lowest',
						'required'
					]);
					
					foreach ($aspect_item_values as $aivi => $aspect_item_value) {
						
						$aspect_item_value_sub_items = $aspect_item_value->items()->get([
							'id',
							'display',
							'display_translated',
							'vsi_value',
							'vsi_value_other',
							'vsi_min',
							'min_below',
							'vsi_max',
							'max_above'					
						]);
						
						foreach ($aspect_item_value_sub_items as $aivsii => $aspect_item_value_sub_item) {
							
							$aspect_item_value_sub_items[$aivsii]['index'] = $aivsii+1;
							
						}						
						
						$aspect_item_values[$aivi]['sub_items'] = $aspect_item_value_sub_items;
						$aspect_item_values[$aivi]['index'] = $aivi+1;
						
						$aspect_item_value_answer = ($aspect_item['item_type'] == 3)?"":false;
					
						$aspect_item_values[$aivi]['answer'] = $aspect_item_value_answer;
						$aspect_item_values[$aivi]['other_answer'] = "";
						
					}
					
					$aspect_items[$aii]['values'] = $aspect_item_values;
					$aspect_items[$aii]['is_text'] = $aspect_item['item_type'] == 3;
					$aspect_items[$aii]['has_presentation'] = $aspect_item['item_type'] == 6;
					$aspect_items[$aii]['values_invalid'] = false;				
					$aspect_items[$aii]['index'] = $aii+1;				
					$aspect_items[$aii]['answer'] = null;
					
				}
				
				$aspects[$ai]['items'] = $aspect_items;
				$aspects[$ai]['index'] = $ai+1;
				
			}
			
			$sections[$si]['aspects'] = $aspects;
			
		}

		$thankyou = $this->thank_you;
		$privacy_notice = $this->privacy_notice;

		return [
			"id"=>$this->id,
			"name"=>$this->name,
			"description"=>$this->description,
			"office"=>$this->office,
			"background"=>$this->background,
			"left_infographic"=>$this->left_infographic,
			"right_infographic"=>$this->right_infographic,
			"include_office"=>$this->include_office,
			"fullscreen_mobile"=>$this->fullscreen_mobile,
			"theme"=>$this->theme,
			"introductions"=>$introductions,
			"sections"=>$sections,
			"thankyou"=>(is_null($thankyou))?array("id"=>0,"infographic"=>null,"message"=>null,"translated"=>null):$thankyou,
			"privacy_notice"=>(is_null($privacy_notice))?array("id"=>0,"content"=>null,"translated"=>null):$privacy_notice,
			"authenticated"=>Auth::guard('api')->check()
		];
    }
}
