var Category = require('./categoryModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
    Category.findById(id)
        .then(function (category) {
            if (!category) {
                next(new Error('No category with that id'));
            } else {
                req.category = category;
                next();
            }
        }, function (err) {
            next(err);
        });
};

exports.get = function (req, res ,next) {
    Category.find({})
        .then(function (categorys) {
            res.json(categorys);            
        }, function(err){
            next(err);
        });
};

exports.getOne = function (req, res, next) {
    var category = req.category;
    res.json(category);
};


exports.put = function (req, res, next) {
    var category = req.category;
    var update = req.body;
    _.merge(category, update);
    category.save(function (err, saved) {
        if (err) {
            next(err);
        } else {
            res.json(saved);
        }        
    });
};

exports.post = function (req, res, next) {
    var newCategory = req.body;
    Category.create(newCategory)
        .then(function (user) {
            res.json(user);
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