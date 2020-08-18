@extends('layouts.auth')

@section('content')

    <section class="login-block">
        <!-- Container-fluid starts -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <form class="md-float-material form-material" method="POST" action="{{ route('change.password') }}">
						@csrf
						<input type="hidden" name="token" value="{{ $token ?? '' }}">
						<div class="text-center">
                            <img class="survey-logo" src="{{ asset(env('LOGO')) }}" alt="logo.png">
                        </div>
                        <div class="auth-box card">
                            <div class="card-block">
                                <div class="row">
                                    <div class="col-md-12">
										<div class="alert alert-warning">
											<strong>Your password is default!</strong><br>Please change your password
										</div>
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
                                <div class="form-group form-primary">
                                    <input type="password" name="password_confirmation" class="form-control @error('password_confirmation') is-invalid @enderror" placeholder="Confirm your password">
									@error('password_confirmation')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror                                    
									<span class="form-bar"></span>
                                </div>									
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Reset Password</button>
                                    </div>
                                </div>
								<hr>
                                <div class="row">
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
                <!-- end of col-sm-12 -->
            </div>
            <!-- end of row -->
        </div>
        <!-- end of container-fluid -->
    </section>				

@endsection