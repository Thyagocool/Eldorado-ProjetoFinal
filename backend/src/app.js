const express = require('express')
require('dotenv').config()
const { registerRoutes } = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
registerRoutes(app)

module.exports = app