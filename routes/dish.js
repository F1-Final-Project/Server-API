const router = require('express').Router();const Dish = require('db-worker/lib/models/dish')router.route('/')    .get(async function (req, res) {        try {            const dishes = await Dish.find({})                .populate('ingredients')                .populate('category')                .populate('additionalIngredients')                .exec();            await res.status(200).json(dishes);        } catch (err) {            return res.status(500).send(err);        }    })    .post(async function (req, res) {        try {            const newDish = {                title: req.body.title,                description: req.body.description,                category: req.body.category,                ingredients: req.body.ingredients,                additionalIngredients: req.body.additionalIngredients,                price: req.body.price,                weight: req.body.weight            };            const dish = new Dish(newDish);            await dish.save();            await res.status(201).json({message: 'Successfully created!'});        } catch (err) {            return res.status(500).send(err);        }    });router.route('/:dishId')    .get(async function (req, res) {        try {            const dish = await Dish.find({_id: req.params.dishId})                .populate('ingredients')                .populate('category')                .exec();;            await res.status(200).json(dish);        } catch (err) {            return res.status(500).send(err);        }    })    .put(async function (req, res) {        try {            const newDish = {                title: req.body.title,                description: req.body.description,                category: req.body.category,                ingredients: req.body.ingredients,                additionalIngredients: req.body.additionalIngredients,                price: req.body.price,                weight: req.body.weight            };            const addedDish = await Dish.findOneAndUpdate({                _id: req.params.dishId            }, newDish, {new: true});            await res.status(200).json({message: 'Successfully updated!'});        } catch (err) {            return res.status(500).send(err);        }    })    .delete(async function (req, res) {        try {            const delDish = await Dish.findByIdAndRemove(req.params.dishId);            await res.status(200).json({message: 'Successfully deleted!'});        } catch (err) {            return res.status(500).send(err);        }    });module.exports = router;