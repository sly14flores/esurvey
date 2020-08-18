<?php

namespace App\System;

trait GatesPolicies {

	/**
	 * Policies Items
	 * "viewAny"=>false,
	 * "view"=>false,
	 * "create"=>false,
	 * "update"=>false,
	 * "delete"=>false,
	 * "restore"=>false,
	 * "forceDelete"=>false
	 */
	 
	/**
	 * $GatesPolicies is always the base
	 * If new Model is added or removed it will be reflected in group form
	 */
	private $GatesPolicies = [
		"User"=>[
			"Name"=>"Users",
			"Description"=>"",
			"Gates"=>[
				"Items"=>[
					"show-users"=>false
				],				
				"Labels"=>[
					"show-users"=>"Show Page"
				]
			],
			"Policies"=>[
				"Items"=>[
					"create"=>false,
					"update"=>false,
					"delete"=>false
				],
				"Labels"=>[
					"create"=>"Add User",
					"update"=>"Update User",
					"delete"=>"Delete User"			
				]
			]
		],	
		"Office"=>[
			"Name"=>"Offices",
			"Description"=>"",			
			"Gates"=>[
				"Items"=>[
					"show-offices"=>false
				],				
				"Labels"=>[
					"show-offices"=>"Show Page"
				]
			],
			"Policies"=>[
				"Items"=>[
					"create"=>false,
					"update"=>false,
					"delete"=>false
				],
				"Labels"=>[
					"create"=>"Add Office",
					"update"=>"Update Office",
					"delete"=>"Delete Office"			
				]
			]
		],
		"Group"=>[
			"Name"=>"Groups",
			"Description"=>"",			
			"Gates"=>[
				"Items"=>[
					"show-groups"=>false
				],				
				"Labels"=>[
					"show-groups"=>"Show Page"
				]
			],
			"Policies"=>[
				"Items"=>[
					"create"=>false,
					"update"=>false,
					"delete"=>false
				],
				"Labels"=>[
					"create"=>"Add Group",
					"update"=>"Update Group",
					"delete"=>"Delete Group"			
				]
			]
		]		
	];	
	
}

?>