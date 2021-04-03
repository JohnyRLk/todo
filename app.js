const express = require('express');
const config = require('./config');
const app = express();
const {port}= require('./config');
const apiRouter = require('./routes/api');
const bodyPareser = require('body-parser');

//db
require('./db/mongoose');
//bodyParser
//content-type: aplication/json
app.use(bodyPareser.json());
//routes
app.use('/api', apiRouter);
//server
app.listen(port, function(){
    console.log('hhtp://localhost:'+config.port);
});

