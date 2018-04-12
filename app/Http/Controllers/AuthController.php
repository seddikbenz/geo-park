<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator, DB, Hash, Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Mail\Message;

class AuthController extends Controller {
  /**
   * API Register
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function register(Request $request) {
    $credentials = $request->only('name', 'email', 'password');

    $rules = [
      'name' => 'required|max:255',
      'email' => 'required|email|max:255|unique:users'
    ];
    $validator = Validator::make($credentials, $rules);
    if ($validator->fails()) {
      return response()->json(['status' => false, 'error' => $validator->messages()], 401);
    }
    $name = $request->name;
    $email = $request->email;
    $password = $request->password;
    if($email == 'admin@geo-parc.com'){
      $user = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password), 'is_admin'=> true]);
    }else{
      $user = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password), 'is_admin'=> false]);
    }
    return response()->json(['status' => true, 'message' => 'Thanks for signing up!', 'user' => $user]);
  }

  /**
   * API Login, on status return JWT Auth token
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function login(Request $request) {
    $credentials = $request->only('email', 'password');

    $rules = [
      'email' => 'required|email',
      'password' => 'required',
    ];

    $validator = Validator::make($credentials, $rules);
    if ($validator->fails()) {
      return response()->json(['status' => false, 'error' => $validator->messages()], 401);
    }

    // $credentials['is_verified'] = 1;

    try {
      // attempt to verify the credentials and create a token for the user
      if (!$token = JWTAuth::attempt($credentials, true)) {
        return response()->json(['status' => false, 'error' => 'We cant find an account with this credentials. Please make sure you entered the right information and you have verified your email address.'], 401);
      }
    } catch (JWTException $e) {
      // something went wrong whilst attempting to encode the token
      return response()->json(['status' => false, 'error' => 'Failed to login, please try again.'], 401);
    }
    // all good so return the token
    $user = User::where('email', $credentials['email'])->first();
    return response()->json(['status' => true, 'token' => $token, 'user' => $user]);
  }

  /**
   * Log out
   * Invalidate the token, so user cannot use it anymore
   * They have to relogin to get a new token
   *
   * @param Request $request
   */
  public function logout(Request $request) {
    $this->validate($request, ['token' => 'required']);

    try {
      JWTAuth::invalidate($request->input('token'));
      return response()->json(['status' => true, 'message' => "You have successfully logged out."]);
    } catch (JWTException $e) {
      // something went wrong whilst attempting to encode the token
      return response()->json(['status' => false, 'error' => 'Failed to logout, please try again.'], 401);
    }
  }

  public function user(Request $request){
    $user = JWTAuth::parseToken()->authenticate();
    return response()->json(["status" => "ok", 'user' => $user]);
  }

}