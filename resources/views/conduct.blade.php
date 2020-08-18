<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>{{ config('app.name') }}</title>
	<link href="{{ mix('conduct/css/index.css') }}" rel="stylesheet">
  </head>
  <body class="app">
	
	<div id="app">
		<sly-spinner ref="pSpinner"></sly-spinner>
		<transition>
			<router-view></router-view>
		</transition>
	</div>
	
	<script type="text/javascript" src="{{ mix('conduct/js/index.js') }}"></script>
	<script type="text/javascript" src="{{ mix('conduct/vue/conduct.js') }}"></script>
  </body>
</html>