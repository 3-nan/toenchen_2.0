
const express = require('express');
//const { body, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/admin', (req, res) => {
    res.render('login', { title: 'Registration form' });
});

/*
router.post('/admin', 
    [
        body('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        body('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email'),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()){
            res.send('Welcome!');
        }
        else {
            res.render('login', { 
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
});*/

module.exports = router;