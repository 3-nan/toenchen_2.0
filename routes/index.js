
const express = require('express');
//const { body, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        description: 'Wir sind elf Freunde, die viel Spaß am gemeinsamen Singen haben. Kennengelernt im Studierendenchor (denn jede*r von uns ist Studierende*r oder war es zumindest mal), hatten wir Lust auf "mehr": Mehr Stimmbildung, mehr Performance und mehr Zeit zum Vertiefen unserer Musikalität. Aus den ersten gemeinsamen Gesangsabenden wurden regelmäßige Proben, gefolgt von kleinen Auftritten, die größer und länger wurden. Mittlerweile besingen wir auch Weihnachtsfeiern oder Hochzeiten und haben im April 2018 ein eigenes Konzert in Paris aufführen dürfen. Im Repertoire haben wir eine gute Mischung aus alten und neuen Klassikern der Popmusik, einige romantische Balladen und auch Disney-Songs.',
        members: 'Claudia, Franz, Gönke, Han, Jette, Marc, Mette, Milena, Phillipp, Thilo und Timo',
    });
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