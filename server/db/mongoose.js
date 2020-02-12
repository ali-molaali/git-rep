const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('config');

mongoose.connect(config.get('MANGOURI'), { useNewUrlParser: true });

module.exports = {
    mongoose
};

