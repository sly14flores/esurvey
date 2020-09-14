<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ConductStyles extends Controller
{

	public function __invoke(Request $request)
	{
		
		$background_image = "/conduct/images/capitol-aerial-1080-80.jpg";

		$contents = <<<EOT
			.survey-backdrop {
				background-repeat: repeat-y;
				background-image: url('$background_image');
			}
			/* Mobile rules */
			@media (max-width: 575.98px) {
				.survey-backdrop {
					background-repeat: repeat-y;
					background-image: url("/conduct/images/capitol-aerial-1080-70.jpg");
					background-attachment: fixed;		
					background-position: 8% 0%;
				}
			}
			@media (max-height: 812px) { /* for Iphone X */
				.survey-backdrop {
					background-repeat: repeat-y;
					background-image: url('$background_image');
					background-attachment: fixed;		
					background-position: 8% 0%;
				}
			}
			@media (max-height: 823px) { /* for Iphone X */
				.survey-backdrop {
					background-repeat: repeat-y;
					background-image: url('$background_image');
					background-attachment: fixed;	
					background-position: 8% 0%;
				}
			}
		EOT;

		$response = Response::make($contents);

		$response->header('Content-Type', 'text/css');

		return $response;

	}

}
