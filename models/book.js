/**
 * Created by Jo_seungwan on 2016. 9. 2..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    userid: String,
    sex : String,
    city : String
});

module.exports = mongoose.model('book', bookSchema);