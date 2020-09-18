var express = require('express');
var router = express.Router();
var controller = require('../controllers/api.js');

/* GET home page. */
router.get('/', controller.api);

module.exports = router;
