const router = require('express').Router();const jwt = require('jsonwebtoken');const dotenv = require('dotenv');const User = require('db-worker/lib/models/user')const config = dotenv.config().parsed;const secret = config.SECRET;router.route('/')    .post(function (req, res) {        const {email, password} = req.body;        User.findOne({email}, function (err, user) {            if (err) {                res.status(500).json({error: 'Internal error ["/auth": .findOne]'});            } else if (!user) {                res.status(401).json({error: 'Invalid email'});            } else {                user.isCorrectPassword(password, function (err, same) {                    if (err) {                        res.status(500).json({                            error: 'Internal error ["/auth": .isCorrectPassword]'                        });                    } else if (!same) {                        res.status(401).json({error: 'Invalid password'});                    } else {                        const payload = {email};                        const token = jwt.sign(payload, secret, {expiresIn: '12h'});                        res.json(token);                    }                });            }        });    });module.exports = router;