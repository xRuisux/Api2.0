var Craw = require('./crawModel');
var _ = require('lodash');
var crawler = require('../../service/crawler');
var createDoc = require('../../utils/docs');

exports.params = function(req, res, next, id) {
    Craw.findById(id)
        .then(function (craw) {
            if (!craw) {
                next(new Error('No craw with that id'));
            } else {
                req.craw = craw;
                next();
            }
        }, function (err) {
            next(err);
        });
};
  
 
exports.get = async function (req, res) {
    try{
        let craws = await crawler;
        let promises = [];
        craws.map(function(craw) {
            promises.push(createDoc(Craw, craw));
        });
        Promise.all(promises);
        res.json({'ok':true});
    }catch(err){
        console.log(err);
        res.json([]);
    }
};

exports.getOne = function (req, res, next) {
    var craw = req.craw;
    res.json(craw);
};


exports.put = function (req, res, next) {
    var craw = req.craw;
    var update = req.body;
    _.merge(craw, update);
    craw.save(function (err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }        
    });
};

exports.post = function (req, res, next) {
    var newCraw = req.body;
    Craw.create(newCraw)
        .then(function (craw) {
            res.json(craw);
        }, function (err) {
            next(err);            
        });
};

exports.delete = function (req, res, next) {
    req.post.remove(function (err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};

  
