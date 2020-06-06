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

router.post('/insertTestWorkout', function(req, res) {

    let testWorkout = {
        title: "Basic Calisthenics", 
        version: "1.0",
        groups: [{
            exercise: "push ups",
            sets: 5,
            reps: 10
        },
        {
            exercise: "pull ups",
            sets: 5,
            reps: 6
        },
        {
            supersets: 4,
            exercises: [{
                exercise: "ab crunches",
                sets: 1,
                reps: 25
            },
            {
                exercise: "prone back extensions",
                sets: 1,
                reps: 30
            }]
        }]
    }
    
    db.collection('workouts').insertOne(testWorkout, () => {
        console.log("Test workout inserted.")
        res.send("Test workout inserted by " + req.body.name + " .")
    })
})

module.exports = router