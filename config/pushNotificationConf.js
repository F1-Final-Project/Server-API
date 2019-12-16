const webpush = require('web-push');
const config = require('./index');

const publicVapidKey = config.PUBLIC_VAPID_KEY;
const privateVapidKey = config.PRIVATE_VAPID_KEY;

// Replace with your email
webpush.setVapidDetails('mailto:imovie23@gmail.com', publicVapidKey, privateVapidKey);