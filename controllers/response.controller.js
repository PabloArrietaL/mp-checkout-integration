exports.success = (req, res) => {
    res.render('success', req.query);
}

exports.failure = (req, res) => {
    res.render('failure', req.query);
}

exports.pending = (req, res) => {
    res.render('pending', req.query);
}

exports.hook = (req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body, 'webhook response');
            res.end('ok');
        });
    }
    return res.status(200);
};