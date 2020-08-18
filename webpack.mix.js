const mix = require('laravel-mix');
// mix.browserSync('esurvey.local');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/login.scss','public/css');
mix.sass('resources/sass/main.scss','public/css');

mix.copy('resources/bower_components/bootstrap/css/bootstrap.min.css','public/css/bootstrap.min.css');
mix.copy('resources/assets/icon/themify-icons/themify-icons.css','public/css');
mix.copy('resources/assets/icon/icofont/css/icofont.css','public/css');
mix.copy('resources/assets/icon/ion-icon/css/ionicons.min.css','public/css');
mix.copy('resources/assets/css/style.css','public/css');
mix.copy('resources/assets/icon/feather/css/feather.css','public/css');
mix.copy('resources/assets/css/jquery.mCustomScrollbar.css','public/css');

// Pnotify
mix.styles([
	'resources/bower_components/pnotify/css/pnotify.css',
	'resources/bower_components/pnotify/css/pnotify.brighttheme.css',
	'resources/bower_components/pnotify/css/pnotify.buttons.css',
	'resources/bower_components/pnotify/css/pnotify.history.css',
	'resources/bower_components/pnotify/css/pnotify.mobile.css',
],'public/css/pnotify.css');

// Required Jquery
mix.scripts([
   'resources/bower_components/jquery/js/jquery.min.js',
   'resources/bower_components/jquery-ui/js/jquery-ui.min.js',
   'resources/bower_components/popper.js/js/popper.min.js',
   'resources/bower_components/bootstrap/js/bootstrap.min.js'
],'public/js/jquery-bootstrap.js');

// jquery slimscroll js
mix.copy('resources/bower_components/jquery-slimscroll/js/jquery.slimscroll.js','public/js');

// vartical layout js
mix.copy('resources/assets/js/vartical-layout.min.js','public/js');

// modernizr js
mix.scripts([
   'resources/bower_components/modernizr/js/modernizr.js',
   'resources/bower_components/modernizr/js/css-scrollbars.js',
],'public/js/modernizr.js');

// Chart js
mix.copy('resources/bower_components/chart.js/js/Chart.js','public/js');

// amchart js
mix.scripts([
	'resources/assets/pages/widget/amchart/amcharts.js',
	'resources/assets/pages/widget/amchart/serial.js',
	'resources/assets/pages/widget/amchart/light.js',
],'public/js/amchart.js');

// i18next.min.js
mix.scripts([
   'resources/bower_components/i18next/js/i18next.min.js',
   'resources/bower_components/i18next-xhr-backend/js/i18nextXHRBackend.min.js',
   'resources/bower_components/i18next-browser-languagedetector/js/i18nextBrowserLanguageDetector.min.js',
   'resources/bower_components/query-i18next/js/jquery-i18next.min.js'
],'public/js/i18next.min.js');

mix.copy('resources/assets/js/jquery.mCustomScrollbar.concat.min.js','public/js');
mix.copy('resources/assets/js/SmoothScroll.js','public/js');
mix.copy('resources/assets/js/pcoded.min.js','public/js');

// Pnotify
mix.scripts([
	'resources/bower_components/pnotify/js/pnotify.js',
	'resources/bower_components/pnotify/js/pnotify.desktop.js',
	'resources/bower_components/pnotify/js/pnotify.buttons.js',
	'resources/bower_components/pnotify/js/pnotify.confirm.js',
	'resources/bower_components/pnotify/js/pnotify.callbacks.js',
	'resources/bower_components/pnotify/js/pnotify.animate.js',
	'resources/bower_components/pnotify/js/pnotify.history.js',
	'resources/bower_components/pnotify/js/pnotify.mobile.js',
	'resources/bower_components/pnotify/js/pnotify.nonblock.js'
],'public/js/pnotify.js');

mix.copy('resources/css/files.css','public/css');

mix.copy('resources/assets/js/common-pages.js','public/js').version();
mix.copy('resources/assets/js/script.js','public/js').version();
mix.js('resources/js/app.js', 'public/vue').version();

// Login
mix.js('resources/js/login.js', 'public/js').version();

/*
 |
 | Static assets
 |
 */
mix.copyDirectory('resources/assets/images', 'public/images')
mix.copyDirectory('resources/assets/icon', 'public/icon')
mix.copyDirectory('resources/assets/fonts', 'public/fonts')
mix.copyDirectory('resources/assets/pages/widget/amchart', 'public/amcharts')

/*
**
** Conduct Survey
**
*/
mix.sass('resources/conduct/sass/index.scss', 'public/conduct/css').version()
mix.js('resources/conduct/index.js', 'public/conduct/js').version()
mix.js('resources/conduct/conduct.js', 'public/conduct/vue').version()
mix.copyDirectory('resources/conduct/static/images', 'public/conduct/images')
