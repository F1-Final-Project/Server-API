const router = require('express').Router();const OrderServices = require('db-worker/lib/services/order');router.route('/')    .get(async function (req, res) {        try {            const orders = await OrderServices.getAllOrder();            console.log(orders);            await res.status(200).json(orders);        } catch (err) {            return res.status(500).send(err);        }    })    .post(async function (req, res) {        try {            const order = await OrderServices.createOrder(req.body);            await res.status(201).json(order);        } catch (err) {            return res.status(500).send(err);        }    });router.route('/:orderId')    .get(async function (req, res) {        try {            const order = await OrderServices.getOrderById(req.params.orderId);            await res.status(200).json(order);        } catch (err) {            return res.status(500).send(err);        }    })    .put(async function (req, res) {        try {            const order = await OrderServices.updateOrder(req.body, req.params.orderId);            await res.status(200).json(order);        } catch (err) {            return res.status(500).send(err);        }    })    .delete(async function (req, res) {        try {            const delId = await OrderServices.deleteOrder(req.params.orderId);            await res.status(200).json(delId);        } catch (err) {            return res.status(500).send(err);        }    });module.exports = router;