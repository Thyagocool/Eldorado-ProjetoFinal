const express = require('express')
const { registerRoutes } = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
registerRoutes(app)

module.exports = app