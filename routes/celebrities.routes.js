const router = require('express').Router()
const celebritiesDB = require('../models/Celebrity.model') // look

// all your routes here
router.get("/", async (req, res, next) => {
  try
  {
    const celebrities = await celebritiesDB.find()
    console.log(celebrities);
    res.render("celebrities/celebrities", {celebrities});
  }
  catch(err) {
    console.log(err)
  }
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
    res.redirect('/celebrities/create')
  }
})

module.exports = router

