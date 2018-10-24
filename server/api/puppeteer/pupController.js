var Pup = require('./pupModel');
var _ = require('lodash');
var createDoc = require('../../utils/docs');
var puppeter = require('../../service/puppeter');

exports.params = function(req, res, next, id) {
    Pup.findById(id)
        .then(function (pup) {
            if (!pup) {
                next(new Error('No pup with that id'));
            } else {
                req.pup = pup;
                next();
            }
        }, function (err) {
            next(err);
        });
};
  
 
exports.get =  function (req, res) {
    puppeter();
        res.json({'ok':true});
};

exports.getOne = function (req, res, next) {
    var pup = req.pup;
    res.json(pup);
};


exports.put = function (req, res, next) {
    var pup = req.pup;
    var update = req.body;
    _.merge(pup, update);
    pup.save(function (err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }        
    });
};

exports.post = function (req, res, next) {
    var newPup = req.body;
    Pup.create(newPup)
        .then(function (pup) {
            res.json(pup);
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

  
