const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home.controller');
const detailController = require('../controllers/detail.controller');
const responseController = require('../controllers/response.controller');

module.exports = () => {
    router.get('/', homeController.home);
    router.get('/detail', detailController.detail);
    router.post('/pay', detailController.pay);
    router.get('/success', responseController.success);
    router.get('/failure', responseController.failure);
    router.get('/pending', responseController.pending);
    return router;
}