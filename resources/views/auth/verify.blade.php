@extends('layouts.auth')

@section('content')

    <section class="login-block">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
					<form class="md-float-material form-material" method="POST" action="{{ route('verification.resend') }}">
						@csrf
						<div class="text-center">
                            <img class="survey-logo" src="{{ asset('images/logo.png') }}" alt="logo.png">
                        </div>					
                        <div class="auth-box card">
                            <div class="card-block">
								@if (session('resent'))
									<div class="alert alert-success" role="alert">
										A fresh verification link has been sent to your email address.
									</div>
								@endif
                                <div class="row m-b-20">
                                    <div class="col-md-12">
                                        <h3 class="text-left">Verify Your Email Address</h3>
										<p class="f-w-600">Before proceeding, please check your email for a verification link.</p>										
										<p class="f-w-600">If you did not receive the email,<button type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">click here to request another</button></p>
                                    </div>
                                </div>
                                <p class="f-w-600 text-right"><a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a></p>
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
					<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
						@csrf
					</form>					
				</div>
			</div>
		</div>
	</section>

@endsection