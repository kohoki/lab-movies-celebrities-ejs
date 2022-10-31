const router = require('express').Router()
const celebritiesDB = require('../models/Celebrity.model') // look

// all your routes here
router.get("/", (req, res, next) => {
    res.render("celebrities/celebrities");
  });

router.get("/new", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

module.exports = router

