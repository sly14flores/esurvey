@extends('layouts.auth')

@section('content')
    <section class="login-block">
        <!-- Container-fluid starts -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <form class="md-float-material form-material" method="POST" action="{{ route('register') }}" novalidate>
						@csrf
                        <div class="auth-box card">
                            <div class="card-block">
                                <div class="row m-b-20">
                                    <div class="col-md-12">
										<div class="text-center">
											<img class="survey-logo" src="{{ asset(env('LOGO')) }}" alt="logo.png">
										</div>
                                    </div>
                                </div>
                                <p class="text-muted text-center p-b-5">Sign Up</p>								
                                <div class="form-group form-primary">
                                    <input type="text" name="firstname" class="form-control @error('firstname') is-invalid @enderror" value="{{ old('firstname') }}" placeholder="First name" autofocus>
									@error('firstname')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror									
                                    <span class="form-bar"></span>
                                </div>
                                <div class="form-group form-primary">
                                    <input type="text" name="middlename" class="form-control @error('middlename') is-invalid @enderror" value="{{ old('middlename') }}" placeholder="Middle name">
									@error('middlename')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
                                    <span class="form-bar"></span>
                                </div>
                                <div class="form-group form-primary">
                                    <input type="text" name="lastname" class="form-control @error('lastname') is-invalid @enderror" value="{{ old('lastname') }}" placeholder="Last name">
									@error('lastname')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
                                    <span class="form-bar"></span>
                                </div>
                                <div class="form-group form-primary">
                                    <select name="office" class="form-control @error('office') is-invalid @enderror" placeholder="Office">
										<option value="">Select office</option>
										@foreach ($offices as $office)
											<option value="{{$office->id}}" {{ ($office->id==old('office'))?"selected='selected'":"" }}>{{$office->name}}</option>										
										@endforeach
									</select>
									@error('office')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
                                    <span class="form-bar"></span>
                                </div>								
                                <div class="form-group form-primary">
                                    <input type="text" name="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') }}" placeholder="Email Address">
									@error('email')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
                                    <span class="form-bar"></span>
                                </div>								
                                <div class="form-group form-primary">
                                    <input type="text" name="username" class="form-control @error('username') is-invalid @enderror" value="{{ old('username') }}" placeholder="Username">
									@error('username')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
									@enderror
                                    <span class="form-bar"></span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group form-primary">
                                            <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" placeholder="Password">
											@error('password')
												<span class="invalid-feedback" role="alert">
													<strong>{{ $message }}</strong>
												</span>
											@enderror											
                                            <span class="form-bar"></span>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group form-primary">
                                            <input type="password" name="password_confirmation" class="form-control @error('password_confirmation') is-invalid @enderror" placeholder="Confirm Password">
											@error('password_confirmation')
												<span class="invalid-feedback" role="alert">
													<strong>{{ $message }}</strong>
												</span>
											@enderror	
                                            <span class="form-bar"></span>
                                        </div>
                                    </div>
                                </div>								
                                <div class="row m-t-30">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">Sign up now</button>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-10">
                                        <p class="text-inverse text-left m-b-0">Thank you.</p>
                                        <p class="text-inverse text-left"><a href="{{ route('login') }}"><b class="f-w-600">Back to Login page</b></a></p>
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
