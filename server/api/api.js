var router = require('express').Router();

router.use('/promotions', require('./crawler/crawRoutes'));
router.use('/pup', require('./puppeteer/pupRoutes'));

module.exports = router;