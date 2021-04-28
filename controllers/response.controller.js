exports.success = (req, res) => {
    const params = req.query;
    res.render('success', req.query);
}

exports.failure = (req, res) => {
    const params = req.query;
    res.render('failure', req.query);
}

exports.pending = (req, res) => {
    const params = req.query;
    res.render('pending', req.query);
}