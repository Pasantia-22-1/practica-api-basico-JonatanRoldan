const express = require('express');
const router = express.Router();
const controllers = require('../controllers/task.ctl')

router.get('/home',controllers.getHome);
router.get('/contact',controllers.getContact);
router.get('/profile',controllers.getProfile);
router.get('/signin',controllers.getSignin);
router.get('/signup',controllers.getSignup);

module.exports = router;