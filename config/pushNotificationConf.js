const webpush = require('web-push');
const config = require('config');

const publicVapidKey = config.PUBLIC_VAPID_KEY;
const privateVapidKey = config.PRIVATE_VAPID_KEY;

// Replace with your email
webpush.setVapidDetails(config.PUSH_EMAIL, publicVapidKey, privateVapidKey);
