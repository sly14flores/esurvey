<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>{{ config('app.name') }}</title>
	<link href="{{ mix('conduct/themes/default/css/index.css') }}" rel="stylesheet">
	<link href="{{ route('css.conduct') }}" rel="stylesheet">
  </head>
  <body class="app survey-backdrop">
	<div id="app"></div>
	<script type="text/javascript" src="{{ mix('conduct/themes/default/js/index.js') }}"></script>
	<script type="text/javascript" src="{{ mix('conduct/themes/default/vue/conduct.js') }}"></script>
  </body>
</html>