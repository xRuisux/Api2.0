var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CrawlerSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    announcer: {
        type: String,
        required: true
    },
    timeStamp: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('promotion', CrawlerSchema);