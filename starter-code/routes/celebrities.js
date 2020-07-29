const express = require('express');
const router  = express.Router();
const Celebrities = require('../models/celebrity.model')

router.get('/celebrities', (req, res, next) => {
  Celebrities.find({})
  .then((celebritiesData) => {
    res.render('celebrities/index', {celebritiesData})
  })
  .catch((err) => console.log(err))
}
)