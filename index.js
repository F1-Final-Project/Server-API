const express = require('express');const dotenv = require('dotenv');const mongoose = require('mongoose');const bodyParser = require('body-parser');const userRestApiRoute = require('./routes/user');const ingredientRestApiRoute = require('./routes/ingredient');const dishRestApiRoute = require('./routes/dish');const categoryMenuRestApiRoute = require('./routes/categoryMenu');const orderRestApiRoute = require('./routes/order');const invoiceRestApiRoute = require('./routes/invoice');const newsRestApiRoute = require('./routes/news');const authRoute = require('./routes/auth');const app = express();const config = dotenv.config().parsed;mongoose.set('useNewUrlParser', true);mongoose.set('useFindAndModify', false);mongoose.set('useCreateIndex', true);mongoose.set('useUnifiedTopology', true);mongoose.connect(config.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})    .then(() => {        console.log('Connected to DB');        app.use((req, res, next) => {            res.setHeader('Access-Control-Allow-Origin', '*');            next();        });        app.use(bodyParser.json());        app.use(bodyParser.urlencoded({extended: false}));        app.use(express.static(config.PUBLIC_ROOT));        app.use((req, res, next) => {            res.setHeader('Access-Control-Allow-Origin', '*');            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');            next();        });        app.use('/users', userRestApiRoute);        app.use('/ingredients', ingredientRestApiRoute);        app.use('/dishes', dishRestApiRoute);        app.use('/categoryMenus', categoryMenuRestApiRoute);        app.use('/orders', orderRestApiRoute);        app.use('/invoices', invoiceRestApiRoute);        app.use('/news', newsRestApiRoute);        app.use('/auth', authRoute);        app.listen(process.env.PORT || config.PORT, err => {            if (err) {                console.log('ERROR --> ', err)            } else {                console.log('Listening on port ' + config.PORT);            }        });    }).catch(err => {    console.log('Error --> ', err);});