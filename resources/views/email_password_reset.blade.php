@extends('layouts.auth')

@section('content')
    <section class="login-block">
        <!-- Container-fluid starts -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">			
                    <!-- Authentication card start -->
                    <form class="md-float-material form-material" method="POST" action="{{ route('password.email') }}">
                        @csrf
						<div class="text-center">
                            <img class="survey-logo" src="{{ asset(env('LOGO')) }}" alt="logo.png">
                        </div>
                        <div class="auth-box card">
                            <div class="card-block">
								<div class="row">
									<div class="col-md-12">
										@if (session('status'))
										<div class="alert alert-success" role="alert">
											{{ session('status') }}
										</div>
										@endif	
									</div>
								</div>							
                                <div class="row m-b-20">
                                    <div class="col-md-12">
                                        <h3 class="text-left">Reset your password</h3>
                                    </div>
                                </div>
                                
                                <div class="form-group form-primary">
                                    <input type="text" name="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') }}" placeholder="Your Email Address">
									@error('email')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror                                    
									<span class="form-bar"></span>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Send Password Reset Link</button>
                                    </div>
                                </div>
                                <p class="f-w-600 text-right">Back to <a href="{{ route('login') }}">Login.</a></p>
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
                    <!-- Authentication card end -->
                </div>
                <!-- end of col-sm-12 -->
            </div>
            <!-- end of row -->
        </div>
        <!-- end of container-fluid -->
    </section>
@endsection
