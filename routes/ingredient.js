const router = require('express').Router();
const IngredientService = require('db-worker/lib/services/ingredient');

const withAuth = require('../middleware/withAuth');
const accessAdmin = require('../middleware/accessAdmin');

router.route('/')
    .get(withAuth, async function (req, res) {
        try {
            const ingredients = await IngredientService.getAllIngredient();
            await res.status(200).json(ingredients);
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .post(withAuth, accessAdmin, async function (req, res) {
        try {
            const newIngredient = await IngredientService.createIngredient(req.body);
            await res.status(201).json(newIngredient);
        } catch (err) {
            return res.status(500).send(err);
        }
    });

router.route('/:ingredientId')
    .get(withAuth, async function (req, res) {
        try {
            const ingredient = await IngredientService.getIngredientById(req.params.ingredientId);
            await res.status(200).json(ingredient);
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .put(withAuth, accessAdmin, async function (req, res) {
        try {
            await IngredientService.updateIngredient(req.body, req.params.ingredientId);
            await res.status(200).json({message: 'Successfully updated!', product: req.body});
        } catch (err) {
            return res.status(500).send(err);
        }
    })
    .delete(withAuth, accessAdmin, async function (req, res) {
        try {
            IngredientService.deleteIngredient(req.params.ingredientId);
            await res.status(200).json({message: 'Successfully deleted!', id: req.params.ingredientId} );
        } catch (err) {
            return res.status(500).send(err);
        }
    });

module.exports = router;

