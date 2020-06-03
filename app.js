let express = require("express")

let app = express()

app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

app.post('/answer', function(req, res) {
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send("Congrats!")
    } else {
        res.send("Sorry that is incorrect.")
    }
})

app.listen(3000)