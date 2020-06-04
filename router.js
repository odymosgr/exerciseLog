const express = require("express")
const router = express.Router()

router.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

router.post('/answer', function(req, res) {
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send("Congrats!")
    } else {
        res.send("Sorry that is incorrect.")
    }
})

module.exports = router