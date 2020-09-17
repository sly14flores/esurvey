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
		"Dashboard"=>[
			"Name"=>"Dashboard",
			"Description"=>"",
			"Gates"=>[
				"Items"=>[
					"show-dashboard"=>false
				],				
				"Labels"=>[
					"show-dashboard"=>"Show Page"
				]
			],
			"Policies"=>[
				"Items"=>[],
				"Labels"=>[]
			]
		],	
		"Survey"=>[
			"Name"=>"Surveys",
			"Description"=>"",
			"Gates"=>[
				"Items"=>[
					"show-surveys"=>false
				],				
				"Labels"=>[
					"show-surveys"=>"Show Page"
				]
			],
			"Policies"=>[
				"Items"=>[
					"viewAny"=>false,
					"view"=>false,
					"create"=>false,
					"update"=>false,
					"delete"=>false
				],
				"Labels"=>[
					"viewAny"=>"View Surveys List",
					"view"=>"View Survey Info",				
					"create"=>"Add Survey",
					"update"=>"Update Survey",
					"delete"=>"Delete Survey"		
				]
			]
		],	
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
					"viewAny"=>false,
					"view"=>false,
					"create"=>false,
					"update"=>false,
					"delete"=>false
				],
				"Labels"=>[
					"viewAny"=>"View Users List",
					"view"=>"View User Info",				
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
					"viewAny"=>false,
					"view"=>false,				
					"create"=>false,
					"update"=>false,
					"delete"=>false
				],
				"Labels"=>[
					"viewAny"=>"View Offices List",
					"view"=>"View Office Info",				
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
					"viewAny"=>false,
					"view"=>false,				
					"create"=>false,
					"update"=>false,
					"delete"=>false
				],
				"Labels"=>[
					"viewAny"=>"View Groups List",
					"view"=>"View Group Info",				
					"create"=>"Add Group",
					"update"=>"Update Group",
					"delete"=>"Delete Group"			
				]
			]
		]		
	];	
	
}

?>