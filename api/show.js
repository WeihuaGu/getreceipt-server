var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var transfercode = require('../model/transfercode');
var qr_image = require('qr-image');
var alipaybaseurl="https://ds.alipay.com/?from=mobilecodec&scheme=alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode="

// define the home page route
router.get('/', function(req, res) {
        res.send('获得或获得用以展示的必要信息');
});

router.get('/alipay/get_transfer_code_uri/:amount', function(req, res) {
        transfercode.getTransferCodeUri(req.params.amount, (err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else
                        res.json({
                                code: 200,
                                uri: result
                        });
        });

});



router.get('/alipay/get_transfer_code/:amount', function(req, res) {
        transfercode.getTransferCodeUri(req.params.amount, (err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else {
                        var temp_qrcode = qr_image.image(result);
                        res.type('png');
                        temp_qrcode.pipe(res);


                }
        });
});
router.get('/alipay/get_transfer_code/:amount/withremark/:remark', function(req, res) {
        transfercode.getTransferCodeUriPlusRemark(req.params.amount,req.params.remark, (err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else {
                        var temp_qrcode = qr_image.image(result);
                        res.type('png');
                        temp_qrcode.pipe(res);


                }
        });
});

router.get('/alipay/get_transfer_code/fixed/:amount', function(req, res) {
        transfercode.getTransferCodeUri(req.params.amount, (err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else {
                        var temp_qrcode = qr_image.image(alipaybaseurl+req.get('host')+"/alipay/get_transfer_code/"+req.params.amount);
                        res.type('png');
                        temp_qrcode.pipe(res);


                }
        });
});


router.get('/alipay/get_transfer_code_uri/:amount/withuserid/:userid', function(req, res) {
        transfercode.getTransferCodeUriWithUserid(req.params.amount,req.params.userid, (err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else
                        res.json({
                                code: 200,
                                uri: result
                        });
        });

});

router.get('/alipay/get_transfer_code_uri/fixed/:amount/withuserid/:userid', function(req, res) {
        transfercode.getTransferCodeUriWithUserid(req.params.amount,req.params.userid, (err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else
                        res.json({
                                code: 200,
                                uri: alipaybaseurl+req.get('host')+"/alipay/get_transfer_code/"+req.params.amount+"/withuserid/"+req.params.userid
                        });
        });

});


router.get('/alipay/get_transfer_code/:amount/withuserid/:userid', function(req, res) {
        transfercode.getTransferCodeUriWithUserid(req.params.amount,req.params.userid ,(err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else {
                        var temp_qrcode = qr_image.image(result);
                        res.type('png');
                        temp_qrcode.pipe(res);


                }
        });
});
router.get('/alipay/get_transfer_code/fixed/:amount/withuserid/:userid', function(req, res) {
        transfercode.getTransferCodeUri(req.params.amount, (err, result) => {
                if (err)
                        res.json({
                                code: 404,
                                msg: err
                        });
                else {
                        var temp_qrcode = qr_image.image(alipaybaseurl+req.get('host')+"/alipay/get_transfer_code/"+req.params.amount+"/withuserid/"+req.params.userid);
                        res.type('png');
                        temp_qrcode.pipe(res);


                }
        });
});


module.exports = router;
