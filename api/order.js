var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var billtransaction = require('../model/incomebilltransaciton');

// define the home page route
router.get('/', function(req, res) {
        res.send('order');
});


module.exports = router;
