const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Object has been readed'
    });

});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Object has been created'
    });

});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Object has been deleted'
    });

});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'Object has been updated'
    });

});


module.exports = router;