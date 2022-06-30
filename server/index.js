const express = require('express');
require('dotenv').config();
const cors = require('cors');
// Get routes to the variabel
const router = require('./src/routes')
const bodyParser = require("body-parser");
// import here
const http = require('http');
const {Server} = require('socket.io')


const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL || 'http://localhost:3000' // define client origin if both client and server have different origin
    }
})
// import socket function and call with parameter io
require('./src/socket')(io);

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

server.listen(port, () => console.log(`Listening on port ${port}!`))
