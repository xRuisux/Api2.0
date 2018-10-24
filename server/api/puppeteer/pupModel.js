var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PdfSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('promos_pdf', PdfSchema);