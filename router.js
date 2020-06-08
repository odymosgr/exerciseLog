const express = require("express")
const router = express.Router()
const db = require('./db')

router.get('/', function(req, res) {
  res.send(`
  <form action="/insertTestWorkout" method="POST">
    <p>Who is inserting the test workout?</p>
    <input name="name" autocomplete="off">
    <button>Submit</button>
  </form>
  `)
})

let testWorkout = {
  title: "Basic Calisthenics",
  description: "This is a basic, full body, calisthenics workout for begginer to intermidiate athletes, it covers the basics with a good amount of volume.",
  version: "1.0",
  type: "normal",
  groups: [{
    sets: 5,
    setExercises: [{
      exercise: "push ups",
      reps: 10
    }]
  },
  {
    sets: 5,
    setExercises: [{
      exercise: "pull ups",
      reps: 6
    }]
  },
  {
    sets: 4,
    setExercises: [{
      exercise: "ab crunches",
      reps: 25
    },
    {
      exercise: "prone back extensions",
      reps: 30
    }]
  }]
}

router.post('/insertTestWorkout', function(req, res) {
    
  db.collection('workouts').insertOne(testWorkout, () => {
    console.log("Test workout inserted.")
    res.send("Test workout inserted by " + req.body.name + " .")
  })
})

module.exports = router