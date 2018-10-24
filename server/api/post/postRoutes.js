var router = require('express').Router();
var logger = require('./../../utils/logger');
var controller = require('./postController')
var createRoutes = require('../../utils/createRoutes')
// router.route('/')
//     .get(function (req, res) {
//         logger.log('Hey from post!');
//         res.send({ok: true});        
//     });

createRoutes(controller, router);

module.exports = router;