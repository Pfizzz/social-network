const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)

router
    .route('/:userId')
    .post(createThought);

// set up GET one, PUT, and DELETE at /api/thoughts/:userId/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;