var router = require('express').Router();
var logger = require('../../utils/logger');
var controller = require('./pupController')
var createRoutes = require('../../utils/createRoutes')
// router.route('/')
//     .get(function (req, res) {
//         logger.log('Hey from pup!');
//         res.send({ok: true});        
//     });

createRoutes(controller, router);

module.exports = router;


