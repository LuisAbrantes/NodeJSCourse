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

app.get('/hello/:name/:position/:color', function (req, res) {
    res.send(
        '<h1>Hello ' +
            req.params.name +
            '</h1>' +
            `<h2>Your position is: ` +
            req.params.position +
            `</h2>` +
            `<h3>Your favorite color is: ` +
            req.params.color +
            `</h3>`
    );
});

app.listen(8081, function () {
    console.log('Server is running on url http://localhost:8081');
});
