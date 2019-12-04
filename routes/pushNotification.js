// const router = require('express').Router();
// const webpush = require('web-push');
// const config = require('../config');
//
// const publicVapidKey = config.PUBLIC_VAPID_KEY;
// const privateVapidKey = config.PRIVATE_VAPID_KEY;
//
// // Replace with your email
// webpush.setVapidDetails('mailto:imovie23@gmail.com', publicVapidKey, privateVapidKey);
//
// router.route('/')
//     .post(function (req, res) {
//         console.log(req.body);
//         const subscription = req.body;
//         res.status(201).json({});
//         const payload = JSON.stringify({title: 'WTF@'});
//
//         console.log(subscription);
//
//         webpush.sendNotification(subscription, payload).catch(error => {
//             console.error(error.stack);
//         });
//     });
//
// module.exports = router;
