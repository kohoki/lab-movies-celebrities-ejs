const router = require('express').Router()
const MovieDB = require('../models/movie.model') 
const celebritiesDB = require('../models/Celebrity.model') 

// all your routes here
router.get("/", (req, res, next) => {
    res.render("movies/movies");
  });

  router.get("/create", async (req, res, next) => {
    try
    {
      const celebrities = await celebritiesDB.find()
      res.render("movies/new-movie", {celebrities});
    }
    catch(err) {
      console.log(err)
    }

  });


module.exports = router