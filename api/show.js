var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var transfercode = require('../model/transfercode');
var qr_image = require('qr-image');

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


module.exports = router;
