var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


// define the home page route
router.get('/', function(req, res) {
        res.send('设备情况api');
});

router.get('/isonline/:id',function(req,res) {
                if(req.params.id!=global.deviceid) {
                    res.json({code:404,msg:"deviceid error"});
                    return;
                }
                if(global.deviceisonline!=true) {
                    res.json({code:400,msg:"device offline"});
                    return;
                }
                if(global.deviceisonline==true) {
                    res.json({code:200,msg:"device online"});
                    return;
                }

});

module.exports = router;
