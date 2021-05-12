window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    // window.Popper = require('popper.js').default;
    // window.$ = window.jQuery = require('jquery');

    // require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Add token
window.axios.interceptors.request.use(function (config) {

  const esurveyStr = localStorage.getItem('esurvey')

  const esurvey = JSON.parse(esurveyStr) || {}

  const token = esurvey.api_token || null

  config.headers.Authorization =  `Bearer ${token}`;

  return config;
});

/**
 * Validation sequence
 * 401 for invalid token e.g., expired or non-passport token
 */
window.axios.interceptors.response.use(
  (response) => {
  return response
},
  async function(error) {
  console.log(error)
      if (error?.response?.status === 401) {
          window.open('/login','_self');
      }
      return Promise.reject(error);
  },
);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

/**
 * Using pusher
 */
/*
window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    encrypted: true
});
*/

/**
 * Using Socket.io with Redis
 */

window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    // host: window.location.hostname + ':6001'
    host: 'https://survey.launion.gov.ph:6001'
});

/*
window.Echo.channel('esurvey_database_message')
    .listen('SendMessage', e => {
		
        console.log(e);
		
		// Try Desktop Notification - HTTPS only
		
		if (! ('Notification' in window)) {
              alert('Web Notification is not supported');
              return;
        } else {
			
            Notification.requestPermission( permission => {
              let notification = new Notification('New post alert!', {
                body: e.message
              });

              // link to page on clicking the notification
              notification.onclick = () => {
                window.open(window.location.href);
              };
            });
			
		}
		
    });
*/
