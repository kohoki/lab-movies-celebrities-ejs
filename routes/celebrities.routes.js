const router = require('express').Router()
const celebritiesDB = require('../models/Celebrity.model') // look

// all your routes here
router.get("/", (req, res, next) => {
    res.render("celebrities/celebrities");
  });

router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
  try {
    await celebritiesDB.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    })
    res.render("celebrities/celebrities");
  } catch (error) {
    console.log(error)
    res.redirect('/celebrities/create')
  }
})

module.exports = router

