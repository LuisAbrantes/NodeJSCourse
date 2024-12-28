const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const { where } = require('sequelize');

// Config
// Template Engine
app.engine(
    'handlebars',
    engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    })
);
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', function (req, res) {
    Post.findAll({ order: [['id', 'DESC']] })
        .then(function (posts) {
            res.render('home', { posts: posts });
        })
        .catch(function (err) {
            console.error('Error fetching posts:', err);
            res.status(500).send('Error fetching posts');
        });
});

app.get('/cad', function (req, res) {
    res.render('forms');
});

app.post('/add', function (req, res) {
    Post.create({
        title: req.body.title,
        content: req.body.content
    })
        .then(function () {
            res.redirect('/');
        })
        .catch(function (error) {
            console.error('Error creating post:', error);
            res.send('ERROR: ' + error);
        });
});

app.get('/delete/:id', function (req, res) {
    Post.destroy({ where: { id: req.params.id } })
        .then(function () {
            res.send('Post successfully deleted! ');
        })
        .catch(function (erro) {
            res.send('This post does not exist! ');
        });
});

app.listen(8081, function () {
    console.log('Server is running on url http://localhost:8081');
});
