const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Config
// Template Engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MySQL database connection
const sequelize = new Sequelize('test', 'root', 'qwepoi', {
    host: 'localhost',
    dialect: 'mysql'
});

// Routes
app.get('/cad', function (req, res) {
    res.render('forms', (err, html) => {
        if (err) {
            console.error('Error rendering view:', err);
            res.status(500).send('Error rendering view');
        } else {
            res.send(html);
        }
    });
});
app.post('/add', function (req, res) {
    res.send('Text: ' + req.body.title + ' Content: ' + req.body.content);
});

app.listen(8081, function () {
    console.log('Server is running on url http://localhost:8081');
});
