exports.success = (req, res) => {
    res.render('success', req.query);
}

exports.failure = (req, res) => {
    res.render('failure', req.query);
}

exports.pending = (req, res) => {
    res.render('pending', req.query);
}
