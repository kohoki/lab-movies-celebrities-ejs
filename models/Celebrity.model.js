//  Add your code here
const { Schema, model } = require('mongoose')

const CelebritySchema = new Schema({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  catchPhrase: {
    type: String
  },
})

const CelebrityDB = model('celebrityDB', CelebritySchema)

module.exports = CelebrityDB