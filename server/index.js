const express = require('express');
require('dotenv').config();
const cors = require('cors');
// Get routes to the variabel
const router = require('./src/routes')

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors());
app.use('/uploads', express.static('uploads'))
// Add endpoint grouping and router
app.use('/api/v1/', router)

app.listen(port, () => console.log(`Listening on port ${port}!`))