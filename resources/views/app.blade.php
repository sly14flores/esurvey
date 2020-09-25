<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- HTML5 Shim and Respond.js IE10 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 10]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->
    <!-- Meta -->	
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Favicon icon -->
    <link rel="icon" href="{{ asset('images/favicon.ico') }}" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/main.css') }}">
    <!-- Required Fremwork -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css') }}">
    <!-- feather Awesome -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/feather.css') }}">
    <!-- ion icons -->
	<link rel="stylesheet" type="text/css" href="{{ asset('css/ionicons.min.css') }}">
	<!-- ico font -->
	<link rel="stylesheet" type="text/css" href="{{ asset('css/icofont.css') }}">
    <!-- Pnotify css -->
	<link rel="stylesheet" type="text/css" href="{{ asset('css/pnotify.css') }}">	
    
	<link rel="stylesheet" type="text/css" href="{{ asset('css/files.css') }}">	
	<!-- Style.css -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/jquery.mCustomScrollbar.css') }}">
	<style type="text/css">

		.survey-logo {

			width: 70px;

		}

	</style>
</head>

<body>
	<div id="app">
		<!-- Pre-loader start -->
		<div class="theme-loader">
			<div class="ball-scale">
				<div class='contain'>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
					<div class="ring">
						<div class="frame"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- Pre-loader end -->
	
		<div id="pcoded" class="pcoded">
			<div class="pcoded-overlay-box"></div>
			<div class="pcoded-container navbar-wrapper">

				<nav class="navbar header-navbar pcoded-header">
					<div class="navbar-wrapper">

						<div class="navbar-logo">
							<a class="mobile-menu" id="mobile-collapse" href="#!">
								<i class="feather icon-menu"></i>
							</a>
							<a href="/">
								<img class="survey-logo img-fluid" src="{{ asset(env('LOGO')) }}" alt="Theme-Logo">
							</a>
							<a class="mobile-options">
								<i class="feather icon-more-horizontal"></i>
							</a>
						</div>

						<div class="navbar-container container-fluid">
							<ul class="nav-left">
							</ul>
							<ul class="nav-right">
								<!-- <li class="header-notification">
									<div class="dropdown-primary dropdown">
										<div class="dropdown-toggle" data-toggle="dropdown">
											<i class="feather icon-bell"></i>
											<span class="badge bg-c-pink">5</span>
										</div>
										<ul class="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
											<li>
												<h6>Notifications</h6>
												<label class="label label-danger">New</label>
											</li>
											<li>
												<div class="media">
													<img class="d-flex align-self-center img-radius" src="{{ asset('images\avatar-4.jpg') }}" alt="Generic placeholder image">
													<div class="media-body">
														<h5 class="notification-user">John Doe</h5>
														<p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
														<span class="notification-time">30 minutes ago</span>
													</div>
												</div>
											</li>
											<li>
												<div class="media">
													<img class="d-flex align-self-center img-radius" src="{{ asset('images\avatar-3.jpg') }}" alt="Generic placeholder image">
													<div class="media-body">
														<h5 class="notification-user">Joseph William</h5>
														<p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
														<span class="notification-time">30 minutes ago</span>
													</div>
												</div>
											</li>
											<li>
												<div class="media">
													<img class="d-flex align-self-center img-radius" src="{{ asset('images\avatar-4.jpg') }}" alt="Generic placeholder image">
													<div class="media-body">
														<h5 class="notification-user">Sara Soudein</h5>
														<p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
														<span class="notification-time">30 minutes ago</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</li> -->
								<!-- <li class="header-notification">
									<div class="dropdown-primary dropdown">
										<div class="displayChatbox dropdown-toggle" data-toggle="dropdown">
											<i class="feather icon-message-square"></i>
											<span class="badge bg-c-green">3</span>
										</div>
									</div>
								</li> -->
								<li class="user-profile header-notification">
									<profile-drop-down></profile-drop-down>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div class="pcoded-main-container">
					<div class="pcoded-wrapper">
						<nav class="pcoded-navbar">
							<div class="pcoded-inner-navbar main-menu">
								@gate('Dashboard','show-dashboard')
								<ul class="pcoded-item pcoded-left-item">
									<li :class="{active: activeRoute=='dashboard'}">
										<router-link to="/dashboard">
											<span class="pcoded-micon"><i class="feather icon-home"></i></span>
											<span class="pcoded-mtext">Dashboard</span>										
										</router-link>
									</li>
								</ul>
								@endgate
								@gate('Survey','show-surveys')
								<ul class="pcoded-item pcoded-left-item">
									<li :class="{ 'pcoded-hasmenu': true, 'pcoded-trigger': activeRoute=='survey_new' || activeRoute=='survey_view' || activeRoute == 'surveys_list' || activeRoute == 'survey_conduct' || activeRoute == 'survey_reports'}"><!-- pcoded-trigger -->
										<a href="javascript:void(0)">
											<span class="pcoded-micon"><i class="feather icon-menu"></i></span>
											<span class="pcoded-mtext">Surveys</span>
										</a>
										<ul class="pcoded-submenu">											
											<li :class="{active: activeRoute=='survey_new'}">
												<router-link to="/survey">
													<span class="pcoded-mtext">New</span>
												</router-link>
											</li>										
											<li :class="{active: activeRoute=='surveys_list'}">
												<router-link to="/surveys">
													<span class="pcoded-mtext">List</span>
												</router-link>
											</li>
											<li :class="{active: activeRoute=='survey_conduct'}">
												<router-link to="/conduct/survey">
													<span class="pcoded-mtext">Conduct</span>
												</router-link>
											</li>
											<li :class="{active: activeRoute=='survey_reports'}">
												<router-link to="/survey/show/reports">
													<span class="pcoded-mtext">Reports</span>
												</router-link>
											</li>																					
										</ul>
									</li>									
								</ul>
								@endgate
								<div class="pcoded-navigatio-lavel">Maintenance</div>
								@gate('User','show-users')
								<ul class="pcoded-item pcoded-left-item">
									<li :class="{ 'pcoded-hasmenu': true, 'pcoded-trigger': activeRoute=='user_new' || activeRoute=='user_view' || activeRoute == 'users_list'}"><!-- pcoded-trigger -->
										<a href="javascript:void(0)">
											<span class="pcoded-micon"><i class="feather icon-menu"></i></span>
											<span class="pcoded-mtext">Users</span>
										</a>
										<ul class="pcoded-submenu">
											<li :class="{active: activeRoute=='user_new'}">
												<router-link to="/user">
													<span class="pcoded-mtext">New</span>
												</router-link>
											</li>										
											<li :class="{active: activeRoute=='users_list'}">
												<router-link to="/users">
													<span class="pcoded-mtext">List</span>
												</router-link>
											</li>											
										</ul>
									</li>									
								</ul>
								@endgate
								@gate('Office','show-offices')
								<ul class="pcoded-item pcoded-left-item">
									<li :class="{ 'pcoded-hasmenu': true, 'pcoded-trigger': activeRoute=='office_new' || activeRoute=='office_view' || activeRoute == 'offices_list'}"><!-- pcoded-trigger -->
										<a href="javascript:void(0)">
											<span class="pcoded-micon"><i class="feather icon-menu"></i></span>
											<span class="pcoded-mtext">Offices</span>
										</a>
										<ul class="pcoded-submenu">
											<li :class="{active: activeRoute=='office_new'}">
												<router-link to="/office">
													<span class="pcoded-mtext">New</span>
												</router-link>
											</li>										
											<li :class="{active: activeRoute=='offices_list'}">
												<router-link to="/offices">
													<span class="pcoded-mtext">List</span>
												</router-link>
											</li>											
										</ul>
									</li>									
								</ul>
								@endgate
								@gate('Group','show-groups')
								<ul class="pcoded-item pcoded-left-item">
									<li :class="{ 'pcoded-hasmenu': true, 'pcoded-trigger': activeRoute=='group_new' || activeRoute=='group_view' || activeRoute == 'groups_list'}"><!-- pcoded-trigger -->
										<a href="javascript:void(0)">
											<span class="pcoded-micon"><i class="feather icon-menu"></i></span>
											<span class="pcoded-mtext">Groups</span>
										</a>
										<ul class="pcoded-submenu">
											<li :class="{active: activeRoute=='group_new'}">
												<router-link to="/group">
													<span class="pcoded-mtext">New</span>
												</router-link>
											</li>										
											<li :class="{active: activeRoute=='groups_list'}">
												<router-link to="/groups">
													<span class="pcoded-mtext">List</span>
												</router-link>
											</li>											
										</ul>
									</li>									
								</ul>
								@endgate
							</div>
						</nav>
						<div class="pcoded-content">
							<div class="pcoded-inner-content">
								<div class="main-body">
									<transition>
										<router-view></router-view>
									</transition>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<sly-p-notify ref="pnotify"></sly-p-notify>
		
	</div>
    <!-- Required Jquery -->
    <script type="text/javascript" src="{{ asset('js/jquery-bootstrap.js') }}"></script>
    <!-- jquery slimscroll js -->
    <script type="text/javascript" src="{{ asset('js/jquery.slimscroll.js') }}"></script>
    <!-- modernizr js -->
    <script type="text/javascript" src="{{ asset('js/modernizr.js') }}"></script>
    <!-- modernizr js -->
    <script type="text/javascript" src="{{ asset('js/pnotify.js') }}"></script> 
   
    <!-- custom js -->
    <script src="{{ asset('js/jquery.mCustomScrollbar.concat.min.js') }}"></script>
    <script src="{{ asset('js/SmoothScroll.js') }}"></script>
    <script src="{{ asset('js/pcoded.min.js') }}"></script>
    <script src="{{ asset('js/vartical-layout.min.js') }}"></script>
    <script type="text/javascript" src="{{ mix('js/script.js') }}"></script>
    <script type="text/javascript" src="{{ mix('vue/app.js') }}"></script>
</body>

</html>