const router = require('express').Router();
const OrderIngredientService = require('db-worker/lib/services/orderIngredient');

router.route('/')
    .get(async function (req, res) {
        try {
            const orderIngredients = await OrderIngredientService.getAllOrderIngredient();
            await res.status(200).json(orderIngredients);
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .post(async function (req, res) {
        try {
            const newOrderIngredient = await OrderIngredientService.createOrderIngredient(req.body);
            await res.status(201).json(newOrderIngredient);
        } catch (err) {
            return res.status(500).send(err);
        }
    });

router.route('/:orderIngredientId')
    .get(async function (req, res) {
        try {
            const orderIngredients = await OrderIngredientService.getOrderIngredientById(req.params.orderIngredientId);
            await res.status(200).json(orderIngredients);
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .put(async function (req, res) {
        try {
            await OrderIngredientService.updateOrderIngredient(req.body, req.params.orderIngredientId);
            await res.status(200).json({message: 'Successfully updated!', product: req.body});
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .delete(async function (req, res) {
        try {
            OrderIngredientService.deleteOrderIngredient(req.params.orderIngredientId);
            await res.status(200).json({message: 'Successfully deleted!', id: req.params.orderIngredientId} );
        } catch (err) {
            return res.status(500).send(err);
        }
    });

module.exports = router;
