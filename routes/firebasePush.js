const router = require('express').Router();

const {storeAppInstanceToken, deleteAppInstanceToken, subscribeAppInstanceToTopic, unsubscribeAppInstanceFromTopic, buildPlatformMessage, sendFcmMessage} = require('../firebase');


router.route('/storetoken')
    .post(async (req, res) => {

        if (!req.body) res.sendStatus(400);
        if (req.body.token) {
           const result = await storeAppInstanceToken(req.body.token);
            result ? res.sendStatus(200) : res.sendStatus(500);
        } else {
            res.sendStatus(400);
        }
    });

router.route('/deletetoken')
    .post(async (req, res) => {
        if (!req.body) res.sendStatus(400);
        if (req.body.token) {
           const result = await deleteAppInstanceToken(req.body.token);
            result ? res.sendStatus(204) : res.sendStatus(500);
        } else {
            res.sendStatus(400);
        }
    });

router.route('/subscribe')
    .post(async (req, res) => {
        if (!req.body) res.sendStatus(400);
        if (req.body.token) {
           const result = await subscribeAppInstanceToTopic(req.body.token, req.body.topic);
            result ? res.sendStatus(200) : res.sendStatus(500);
        } else {
            res.sendStatus(400);
        }
    });

router.route('/unsubscribe')
    .post(async (req, res) => {
        if (!req.body) res.sendStatus(400);
        if (req.body.token) {
           const result = await unsubscribeAppInstanceFromTopic(req.body.token, req.body.topic);
            result ? res.sendStatus(200) : res.sendStatus(500);
        } else {
            res.sendStatus(400);
        }
    });

router.route('/sendMassage')
    .post(async (req, res) => {
        if (!req.body) res.sendStatus(400);
        if (req.body.token) {
            const result = await buildPlatformMessage(req.body.token, req.body.title, req.body.body);
            const test = await sendFcmMessage(result);
            result ? res.sendStatus(200) : res.sendStatus(500);
        } else {
            res.sendStatus(400);
        }
    });

module.exports = router;