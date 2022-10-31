const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: {
    type: String
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  },
  cast: {
    type: [String]
  },
})


const MovieDB = model('MovieDB', movieSchema)
module.exports = MovieDB