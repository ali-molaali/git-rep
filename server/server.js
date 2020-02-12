process.env.NODE_CONFIG_DIR = __dirname + '/config';
const config = require('config');
const { User } = require('./model/user');
console.log(config.get('Level'));

let newUser = new User({
    fullname: "ali molaali",
    email: "molaali.al",
    password: 12345678

});

console.log(config.get('MANGOURI'));
newUser.save().then((user) => {
    console.log('User has been saved to the database.', user);
}).catch(err => { `the error is : ${console.log(err)}` });
