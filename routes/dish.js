const router = require('express').Router();
const DishService = require('db-worker/lib/services/dish');

const withAuth = require('../middleware/withAuth');
const accessAdmin = require('../middleware/accessAdmin');

router.route('/')
    .get(withAuth, async function (req, res) {
        try {
            const dishes = await DishService.getAllDish();
            await res.status(200).json(dishes);
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .post(withAuth, accessAdmin, async function (req, res) {
        try {
            const newDish = await DishService.createDish(req.body);
            await res.status(201).json(newDish);
        } catch (err) {
            return res.status(500).send(err);
        }
    });

router.route('/:dishId')
    .get(withAuth, async function (req, res) {
        try {
            const dish = await DishService.getDishById(req.params.dishId);
            await res.status(200).json(dish);
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .put(withAuth, accessAdmin, async function (req, res) {
        try {
            await DishService.updateDish(req.body, req.params.dishId);
            await res.status(200).json({message: 'Successfully updated!', product: req.body});
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .delete(withAuth, accessAdmin, async function (req, res) {
        try {
            await DishService.deleteDish(req.params.dishId);
             await res.status(200).json({message: 'Successfully deleted!', id: req.params.dishId});
        } catch (err) {
            return res.status(500).send(err);
        }
    });

module.exports = router;

