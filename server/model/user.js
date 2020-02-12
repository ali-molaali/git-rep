const { mongoose } = require('./../db/mongoose');
const validator = require('validator');


let UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    }, email: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: '{value} is not valid email'
        }
    }, password: {
        type: String,
        minlength: 6,
        required: true
    }
});
let User = mongoose.model('User', UserSchema);
module.exports = { User }