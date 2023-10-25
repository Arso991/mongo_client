var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")

/* GET users listing. */
router.get('/', indexController.register);

module.exports = router;
