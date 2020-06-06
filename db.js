const mongodb = require('mongodb')

const connectionString = 'mongodb+srv://exerciseLogUser1:oCzo7vBtZbDxugz3@cluster0-42trf.mongodb.net/ExerciseLog?retryWrites=true&w=majority'

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db()
  const app = require('./app')
  app.listen(3000)
})