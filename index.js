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

app.post('/hook', (req, res) => {
    // if (req.method === 'POST') {
    //     let body = '';
    //     req.on('data', (chunk) => {
    //         body += chunk.toString();
    //     });
    //     req.on('end', () => {
    //         console.log(body, 'webhook response');
    //         res.end('ok');
    //     });
    // }

    console.log(req.body);

    return res.status(200);
});

app.listen(port);