var Crawler = require('../api/crawler/crawModel');
var _ = require('lodash');
var logger = require('./logger');
var serviceCrawler = require('../service/crawler');
logger.log('Seeding the Database');

var createDoc = function(model, doc) {
  console.log('model');
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      console.log(saved)
      if (err) {
        console.log(err);
      }
      
      return err ? reject(err) : resolve(saved);
    });
  });
};

var createCrawler = function(data) {

  // var promises = promos.map(function(serviceCrawler) {
  //   console.log('teste');
  //   return createDoc(Crawler, serviceCrawler);
  // });

  return createDoc(Crawler, promos);

  return Promise.all(promises)
    .then(function(promos) {
      return _.merge({promos: promos}, data || {});
    });
};

serviceCrawler.then((serviceCrawler) =>{
  var promos = serviceCrawler;
})
  .then(createCrawler)
.catch(logger.log.bind(logger));