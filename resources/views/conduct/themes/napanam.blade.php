<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>{{ config('app.name') }}</title>
  </head>
  <body>
	<div id="app"></div>
	<script type="text/javascript" src="{{ mix('conduct/themes/napanam/js/index.js') }}"></script>
  </body>
</html>