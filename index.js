const express = require("express")
const app = express()

app.use(express.json())
const stich = require("./routes/ideas.route")
stich(app)//Stitching the route here


app.listen(8000, () => {
    console.log("Server is listening on port 3000")
})