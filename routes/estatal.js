const express = require('express');
let estatal = require('../controllers/EstatalController.js');
//defino a un Router
let router = express.Router();

router.get('/', estatal.list);

module.exports = router;