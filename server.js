/***************************** */
// DEPENDENCIES
/***************************** */
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

/***************************** */
// DATABASE CONNECTION
/***************************** */

/***************************** */
// MODELS
/***************************** */

/***************************** */
// MIDDLEWARE
/***************************** */

/***************************** */
// ROUTES
/***************************** */
app.get("/", (req, res) => {
    res.send("Hello World")
})

/***************************** */
// SERVER LISTENER
/***************************** */
const { PORT = 3000 } = process.env

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})