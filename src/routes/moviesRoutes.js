const express = require('express');
const router = express.Router();

const controller = require('../controllers/api/moviesController');

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.store);
router.delete('/:id', controller.destroy);

module.exports = router;
