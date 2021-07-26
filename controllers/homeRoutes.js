const User = require("../models/User.js");
const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('details', async (req, res) => {
    res.render('details')
})

router.get('login', async (req, res) => {
    res.render('login')
})

router.get('profile', async (req, res) => {
    res.render('profile')
})







module.exports = router;