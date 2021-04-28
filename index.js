const express = require('express');
const exphbs = require('express-handlebars');

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const routes = require('./routes');

const port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));

app.use('/assets', express.static(__dirname + '/assets'));

app.use('/', routes());

app.listen(port);