const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://exces:exces786@excescompany-r1zsp.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true});


const app = express();


app.use(cors());

const myapi = require('./Rest/myapi');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', myapi);

http.createServer(app).listen(process.env.PORT|| 3002);
console.log("Backend Server Is On=", process.env.PORT|| 3002);