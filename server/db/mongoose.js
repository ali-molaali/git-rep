const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('config');

mongoose.connect(config.get('MANGOURI'), {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
});

module.exports = {
    mongoose
};

