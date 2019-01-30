var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var billtransaction = require('../model/incomebilltransaciton');

// define the home page route
router.get('/', function(req, res) {
        res.send('收款账单api');
});

router.post('/getedmoney/',function(req,res) {
        var onecollection=req.body;
        billtransaction.addOneIncomeBillItem(onecollection,(err,result)=>{
                if(err) res.json({err:err});
                res.json({code:200,msg:result});
        });
});

router.get('/querybill/now',function(req,res) {
        billtransaction.getNowIncomeBillItem((err,result)=>{
                if(err) res.json({err:err});
                res.json(result);
        });
});

module.exports = router;
