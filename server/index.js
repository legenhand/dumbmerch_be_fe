const express = require('express');
require('dotenv').config();
const cors = require('cors');
// Get routes to the variabel
const router = require('./src/routes')
const bodyParser = require("body-parser");

const app = express()

const port = process.env.PORT || 5000
app.use( bodyParser.json() );  // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(express.json())
app.use(cors());
app.use('/uploads', express.static('uploads'))
// Add endpoint grouping and router
app.use('/api/v1/', router)

app.listen(port, () => console.log(`Listening on port ${port}!`))