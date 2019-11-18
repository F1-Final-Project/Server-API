const router = require('express').Router();const CategoryMenu = require('db-schemas/lib/models/category')router.route('/')    .get(async function (req, res) {        try {            const categoryMenu = await CategoryMenu.find({});            await res.status(200).json(categoryMenu);        } catch (err) {            return res.status(500).send(err);        }    })    .post(async function (req, res) {        try {            const newCategoryMenu = {                title: req.body.title,                description: req.body.description            };            const categoryMenu = new CategoryMenu(newCategoryMenu);            await categoryMenu.save();            await res.status(201).json({message: 'Successfully created!'});        } catch (err) {            return res.status(500).send(err);        }    });router.route('/:categoryMenuId')    .get(async function (req, res) {        try {            const categoryMenu = await CategoryMenu.find({_id: req.params.categoryMenuId});            await res.status(200).json(categoryMenu);        } catch (err) {            return res.status(500).send(err);        }    })    .put(async function (req, res) {        try {            const newCategoryMenu = {                title: req.body.title,                description: req.body.description            };            const addedCategoryMenu = await CategoryMenu.findOneAndUpdate({                _id: req.params.categoryMenuId            }, newCategoryMenu, {new: true});            await res.status(200).json({message: 'Successfully updated!'});        } catch (err) {            return res.status(500).send(err);        }    })    .delete(async function (req, res) {        try {            const delCategoryMenu = await CategoryMenu.findByIdAndRemove(req.params.categoryMenuId);            await res.status(200).json({message: 'Successfully deleted!'});        } catch (err) {            return res.status(500).send(err);        }    });module.exports = router;