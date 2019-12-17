const router = require('express').Router();const CategoryMenuService = require('db-worker/lib/services/categoryMenu');const withAuth = require('../middleware/withAuth');const accessAdmin = require('../middleware/accessAdmin');router.route('/')    .get(withAuth, async function (req, res) {        try {            const categoryMenu = await CategoryMenuService.getAllCategoryMenu();            await res.status(200).json(categoryMenu);        } catch (err) {            return res.status(500).send(err);        }    })    .post(withAuth, accessAdmin, async function (req, res) {        try {            await CategoryMenuService.createCategoryMenu(req.body);            await res.status(201).json({message: 'Successfully created!'});        } catch (err) {            return res.status(500).send(err);        }    });router.route('/:categoryMenuId')    .get(withAuth, async function (req, res) {        try {            const categoryMenu = await CategoryMenuService.getCategoryMenuById(req.params.categoryMenuId);            await res.status(200).json(categoryMenu);        } catch (err) {            return res.status(500).send(err);        }    })    .put(withAuth, accessAdmin, async function (req, res) {        try {            await CategoryMenuService.updateCategoryMenu(req.body, id);            await res.status(200).json({message: 'Successfully updated!'});        } catch (err) {            return res.status(500).send(err);        }    })    .delete(withAuth, accessAdmin, async function (req, res) {        try {            await CategoryMenuService.deleteCategoryMenu(req.params.categoryMenuId);            await res.status(200).json({message: 'Successfully deleted!'});        } catch (err) {            return res.status(500).send(err);        }    });module.exports = router;