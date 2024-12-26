const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

app.get('/about', function (req, res) {
    res.send('This is about page');
});

app.get('/blog', function (req, res) {
    res.send('This is blog page');
});

app.listen(8081, function () {
    console.log('Server is running on url http://localhost8081');
});
