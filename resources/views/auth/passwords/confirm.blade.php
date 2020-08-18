@extends('layouts.auth')

@section('content')

    <section class="login-block">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
					<form class="md-float-material form-material" method="POST" action="{{ route('password.confirm') }}">
						@csrf
						<div class="text-center">
                            <img class="survey-logo" src="{{ asset('images/logo.png') }}" alt="logo.png">
                        </div>
                        <div class="auth-box card">
                            <div class="card-block">
                                <div class="row m-b-20">
                                    <div class="col-md-12">
                                        <h3 class="text-left">Confirm password</h3>
										<p class="f-w-600">Please confirm your password before continuing.</p>
                                    </div>
                                </div>
                                <div class="form-group form-primary">
                                    <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" placeholder="Your password">
									@error('password')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror                                    
									<span class="form-bar"></span>
                                </div>							
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Confirm Password</button>
                                    </div>
                                </div>
                                <div class="row text-left">
                                    <div class="col-12">
                                        <div class="forgot-phone text-right f-right">
										@if (Route::has('password.request'))										
                                            <a href="{{ route('password.request') }}" class="text-right f-w-600"> Forgot Password?</a>
										@endif										
                                        </div>
                                    </div>
                                </div>
                                <hr>								
                                <div class="row m-t-25">
                                    <div class="col-md-10">
                                        <p class="text-inverse text-left m-b-0">Thank you.</p>
                                    </div>
                                    <div class="col-md-2">
                                        <img src="{{ asset('images/ilovelaunion-50.png') }}" alt="I Love La Union">
                                    </div>									
                                </div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>

@endsection