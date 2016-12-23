//run sudo mongod
//run mongo shell
//run node server i.e. nodemon server.js

// Require all dependencies \\
var express = require('express');
var logger = require('morgan');
// var sendgrid = require('sendgrid')

// Create Express App Object \\
var app = express();

// Mount Middleware \\
app.use(logger('dev'));
// app.use(sendgrid());
app.use(express.static('public')); //index file is the '/' root



// Routes \\
app.get('/', (req, res) => {
    console.log('Youre at the home route!');
    res.send('index.html', { root: './public/html' })
});

// Listening for the PORT and returning a console log
var PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log("There was a problem: ", err);
    } else {
        console.log("Server is running on port: ", PORT);
    }
});