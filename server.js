/***************************** */
// DEPENDENCIES
/***************************** */
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const { PORT = 3000, DATABASE_URL } = process.env

const app = express()

/***************************** */
// DATABASE CONNECTION
/***************************** */
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error))

/***************************** */
// MODELS
/***************************** */
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})

const Bookmark = mongoose.model("Bookmark", BookmarkSchema)

/***************************** */
// MIDDLEWARE
/***************************** */
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

/***************************** */
// ROUTES
/***************************** */
app.get("/", (req, res) => {
    res.send("Hello World")
})

/***************************** */
// SERVER LISTENER
/***************************** */
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})