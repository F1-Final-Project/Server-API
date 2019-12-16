const router = require('express').Router();
const OrderCategoriesService = require('db-worker/lib/services/orderCategories');

router.route('/')
    .get(async function (req, res) {
        try {
            const orderCategories = await OrderCategoriesService.getAllOrderCategories();
            await res.status(200).json(orderCategories);
        } catch (err) {
            return res.status(500).send(err);
        }
    }).post(async function (req, res) {
    try {
        const newOrderCategories = await OrderCategoriesService.createOrderCategories(req.body);
        await res.status(201).json(newOrderCategories);
    } catch (err) {
        return res.status(500).send(err);
    }
});


module.exports = router;
