const router = require('express').Router()

// all your routes here
router.get("/", (req, res, next) => {
    res.render("movies/movies");
  });

module.exports = router