const express = require('express');
const router = express.Router();

router.get('/prueba', (req, res) => {
    res.render('links/add');
});
router.get('/busqueda', (req, res) => {
    res.send('oh yeah');
    //res.render('links/add');
});


module.exports = router;