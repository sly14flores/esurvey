<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\User;

class LoginApiController extends Controller
{

    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 422);
        };

        $login = $validator->valid();
        
        if (!Auth::attempt($login)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Username or password is incorrect'
            ], 401);
        }
        
        $user = Auth::user();
        
        return $user;

    }

}
