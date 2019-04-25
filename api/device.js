var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var clientecho = require('../model/clientecho');



// define the home page route
router.get('/', function(req, res) {
        res.send('设备情况api');
});

router.get('/isonline/:id',function(req,res) {
                if(clientecho.isOnline(req.params.id)) {
                    res.json({code:200,msg:"device online"});
                    return;
                }

                else{
                    res.json({code:404,msg:"device offline"});
                    return;
                }

});

module.exports = router;
