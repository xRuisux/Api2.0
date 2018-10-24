var router = require('express').Router();
var logger = require('../../utils/logger');
var controller = require('./crawController')
var createRoutes = require('../../utils/createRoutes')
// router.route('/')
//     .get(function (req, res) {
//         logger.log('Hey from craw!');
//         res.send({ok: true});        
//     });

createRoutes(controller, router);

module.exports = router;