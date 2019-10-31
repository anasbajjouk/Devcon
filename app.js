const express = require('express');
const app = express();

app.use(express.json());

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.get('/', (req, res) => res.end('hello'));

//Routes
app.use('/api/v1/users', users);
app.use('/api/v1/profile', profile);
app.use('/api/v1/posts', posts);

module.exports = app;