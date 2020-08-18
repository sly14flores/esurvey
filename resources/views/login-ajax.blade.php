@extends('layouts.auth')

@section('content')
    <section id="app" class="login-block">
        <!-- Container-fluid starts -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <!-- Authentication card start -->
                    <form class="md-float-material form-material" method="POST" v-on:submit.prevent="login" novalidate autocomplete="off">
                        <div class="auth-box card">
                            <div class="card-block">
                                <div class="row m-b-20">
                                    <div class="col-md-12">
										<div class="text-center">
											<img class="survey-logo" src="{{ asset(env('LOGO')) }}" alt="logo.png">
										</div>
                                    </div>
                                </div>
                                <p class="text-muted text-center p-b-5">Sign in with your regular account</p>
                                <div class="form-group form-primary">
                                    <input type="text" class="form-control" v-model="auth.username" :class="{'is-invalid': validation.hasOwnProperty('username')}" placeholder="Username" autofocus>
                                    <span class="invalid-feedback" role="alert">
                                        <strong>@{{validation.hasOwnProperty('username')?validation.username[0]:''}}</strong>
                                    </span>								
                                    <span class="form-bar"></span>
                                </div>
                                <div class="form-group form-primary">
                                    <input type="password" class="form-control" v-model="auth.password" :class="{'is-invalid': validation.hasOwnProperty('password')}" placeholder="Password">
                                    <span class="invalid-feedback" role="alert">
                                        <strong>@{{validation.hasOwnProperty('password')?validation.password[0]:''}}</strong>
                                    </span>									
                                    <span class="form-bar"></span>
                                </div>
                                <div class="row m-t-25 text-left">
                                    <div class="col-12">
                                        <div class="checkbox-fade fade-in-primary">
                                            <label>
                                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                                <span class="cr"><i class="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                <span class="text-inverse">Remember me</span>
                                            </label>
                                        </div>
                                        <div class="forgot-phone text-right f-right">
										@if (Route::has('password.request'))										
                                            <a href="{{ route('password.request') }}" class="text-right f-w-600"> Forgot Password?</a>
										@endif										
                                        </div>
                                    </div>
                                </div>
                                <div class="row m-t-30">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</button>
                                    </div>
                                </div>
								@if (Route::has('register'))
                                <p class="text-inverse text-left">Don't have an account?<a href="{{ route('register') }}"> <b class="f-w-600"> Register here </b></a>for free!</p>
								@endif
                            </div>
                        </div>
                    </form>
                        <!-- end of form -->
                    </div>
                    <!-- Authentication card end -->
                </div>
                <!-- end of col-sm-12 -->
            </div>
            <!-- end of row -->
        
        <!-- end of container-fluid -->
    </section>
@endsection

@section('scripts')
<script src="{{ mix('js/login.js') }}"></script>
@endsection