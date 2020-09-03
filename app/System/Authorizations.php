<?php

namespace App\System;

use App\Group;
use App\System\GatesPolicies;
use Illuminate\Support\Facades\Schema;

class Authorizations
{

	use GatesPolicies;

	private $id = null;

	public function __construct($user = null)
	{
		
		if ($user!=null) {
			
			if (Schema::hasTable('groups')) {
			
				$group = Group::find($user->group);
		
				if ($group!=null) $this->id = $group->id;
			
			}
			
		}
		
	}

	function template()
	{

		return $this->GatesPolicies;

	}
	
	function get()
	{
		
		$group = Group::find($this->id);
		
		$GatesPolicies = ($group!=null)
						?decrypt($group->authorizations)
						:$this->GatesPolicies;
		
		return $GatesPolicies;		
		
	}
	
	function form_template()
	{
		
		$template = $this->toIterables($this->GatesPolicies);
		
		return $template;
		
	}
	
	private function toIterables($GatesPolicies)
	{
		
		$iterables = [];
		
		$Props = array_keys($GatesPolicies);
		
		foreach ($Props as $model) {
			
			$name = $GatesPolicies[$model]['Name'];
			$description = $GatesPolicies[$model]['Description'];
			$gates_assocs = $GatesPolicies[$model]['Gates']['Items'];
			$gates_assocs_labels = $GatesPolicies[$model]['Gates']['Labels'];
			$policies_assocs = $GatesPolicies[$model]['Policies']['Items'];
			$policies_assocs_labels = $GatesPolicies[$model]['Policies']['Labels'];
			
			$gates = [];
			foreach ($gates_assocs as $gp => $gv) {
				
				$gates[] = array(
					"gate"=>$gp,
					"value"=>$gv,
					"label"=>$gates_assocs_labels[$gp]
				);
				
			}			
			
			$policies = [];
			foreach ($policies_assocs as $pp => $pv) {
				
				$policies[] = array(
					"policy"=>$pp,
					"value"=>$pv,
					"label"=>$policies_assocs_labels[$pp]
				);
				
			}
			
			$iterables[] = array(
				"all"=>false,
				"model"=>$model,
				"name"=>$name,
				"description"=>$description,
				"gates"=>$gates,
				"policies"=>$policies
			);
			
		}
		
		return $iterables;
		
	}

	private function mergeForForm($GatesPolicies)
	{
	
		$BaseGatesPolicies = $this->GatesPolicies;
		
		foreach ($BaseGatesPolicies as $BG_P => $BG_V) {
			
			// Gates Labels
			foreach ($BaseGatesPolicies[$BG_P]['Gates']['Labels'] as $Gate_Label_P => $Gate_Label_V) {
				
				$BaseGatesPolicies[$BG_P]['Gates']['Labels'][$Gate_Label_P] = (isset($GatesPolicies[$BG_P]['Gates']['Labels'][$Gate_Label_P]))
																				?$GatesPolicies[$BG_P]['Gates']['Labels'][$Gate_Label_P]
																				:$BaseGatesPolicies[$BG_P]['Gates']['Labels'][$Gate_Label_P];
				
			}
			
			// Gates Items
			foreach ($BaseGatesPolicies[$BG_P]['Gates']['Items'] as $Gate_Item_P => $Gate_Item_V) {
				
				$BaseGatesPolicies[$BG_P]['Gates']['Items'][$Gate_Item_P] = (isset($GatesPolicies[$BG_P]['Gates']['Items'][$Gate_Item_P]))
																				?$GatesPolicies[$BG_P]['Gates']['Items'][$Gate_Item_P]
																				:$BaseGatesPolicies[$BG_P]['Gates']['Items'][$Gate_Item_P];
				
			}

			// Policies Labels
			foreach ($BaseGatesPolicies[$BG_P]['Policies']['Labels'] as $Policy_Label_P => $Policy_Label_V) {
				
				$BaseGatesPolicies[$BG_P]['Policies']['Labels'][$Policy_Label_P] = (isset($GatesPolicies[$BG_P]['Policies']['Labels'][$Policy_Label_P]))
																				?$GatesPolicies[$BG_P]['Policies']['Labels'][$Policy_Label_P]
																				:$BaseGatesPolicies[$BG_P]['Policies']['Labels'][$Policy_Label_P];
				
			}
			
			// Policies Items
			foreach ($BaseGatesPolicies[$BG_P]['Policies']['Items'] as $Policy_Item_P => $Policy_Item_V) {
				
				$BaseGatesPolicies[$BG_P]['Policies']['Items'][$Policy_Item_P] = (isset($GatesPolicies[$BG_P]['Policies']['Items'][$Policy_Item_P]))
																				?$GatesPolicies[$BG_P]['Policies']['Items'][$Policy_Item_P]
																				:$BaseGatesPolicies[$BG_P]['Policies']['Items'][$Policy_Item_P];
				
			}		
			
		}
		
		return $BaseGatesPolicies;
	
	}

	public function decode($EncryptedGatesPolicies)
	{

		$GatesPolicies = decrypt($EncryptedGatesPolicies);

		// Merge with Base
		$mergedGatesPolicies = $this->mergeForForm($GatesPolicies);

		$iterables = $this->toIterables($mergedGatesPolicies);

		return $iterables;

	}

	private function toAllAssocs($iterables)
	{
		
		$all_assocs = [];
		
		foreach ($iterables as $iterable) {
			
			$gates_ite = $iterable['gates'];
			$gates = [];
			$gates_lables = [];
			
			foreach ($gates_ite as $gi) {
				$gates[$gi['gate']] = $gi['value'];
				$gates_lables[$gi['gate']] = $gi['label'];
			}
			
			$policies_ite = $iterable['policies'];
			$policies = [];
			$policies_labels = [];
			
			foreach ($policies_ite as $pi) {
				$policies[$pi['policy']] = $pi['value'];
				$policies_labels[$pi['policy']] = $pi['label'];
			}
			
			$all_assocs[$iterable['model']] = [
				"Name"=>$iterable['name'],
				"Description"=>$iterable['description'],
				"Gates"=>[
					"Items"=>$gates,
					"Labels"=>$gates_lables
				],
				"Policies"=>[
					"Items"=>$policies,
					"Labels"=>$policies_labels
				]
			];
			
		}
		
		return $all_assocs;
		
	}
	
	public function encode($iterables)
	{

		$all_assocs = $this->toAllAssocs($iterables);

		$encrypted_all_assocs = encrypt($all_assocs);

		return $encrypted_all_assocs;
	
	}

}

?>