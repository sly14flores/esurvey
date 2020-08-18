<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class RedisTest extends Controller
{

	public function setMessage($message) {

		Redis::set('message', $message);
	
	}

	public function getMessage() {

		$message = Redis::get('message');
		
		return $message;
	
	}
	
	public function publish($message) {
		
		Redis::publish('test-channel', $message);
		
	}

}
