const bodyParser = require('body-parser');const express =  require('express');const config = require('../config');const userRestApiRoute = require('../routes/user');const ingredientRestApiRoute = require('../routes/ingredient');const dishRestApiRoute = require('../routes/dish');const categoryMenuRestApiRoute = require('../routes/categoryMenu');const orderRestApiRoute = require('../routes/order');const invoiceRestApiRoute = require('../routes/invoice');const newsRestApiRoute = require('../routes/news');const reservedRestApiRoute = require('../routes/reserved');const authRoute = require('../routes/auth');const orderIngredientRestApiRoute = require('../routes/orderIngredient');const orderCategoriesRestApiRoute = require('../routes/orderCategories');module.exports = ({app}) => {        app.use((req, res, next) => {            res.setHeader('Access-Control-Allow-Origin', '*');            next();        });        app.use(bodyParser.json());        app.use(bodyParser.urlencoded({extended: false}));        app.use(express.static(config.PUBLIC_ROOT));        app.use((req, res, next) => {            res.setHeader('Access-Control-Allow-Origin', '*');            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');            next();        });        app.use('/users', userRestApiRoute);        app.use('/ingredients', ingredientRestApiRoute);        app.use('/dishes', dishRestApiRoute);        app.use('/categoryMenus', categoryMenuRestApiRoute);        app.use('/orders', orderRestApiRoute);        app.use('/invoices', invoiceRestApiRoute);        app.use('/news', newsRestApiRoute);        app.use('/reserved', reservedRestApiRoute);        app.use('/auth', authRoute);        app.use('/order-ingredients', orderIngredientRestApiRoute);        app.use('/order-categories', orderCategoriesRestApiRoute);};