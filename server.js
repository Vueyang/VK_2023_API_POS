const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// 3 ປະສາມ Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
// import routes ມາໃຊ້ ແບບ auto
const {readdirSync} = require('fs');
const connectDB = require('./Config/db');

 // import routes ມາໃຊ້
 //const authRoute = require('./Routes/auth');
 //const productionRoute = require('./Routes/product');
// app
const app = express();
// db
connectDB();

// ເອື້ອນໃຊ້ Middleware
//app.use(jwt.verify);
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// ວີທີ Routes ມີ 3 ວີທີ
// ວີທີທີ່ 1 route 
/*app.get('/register', (req, res) =>{
    //code here
    console.log("Hello World");
    res.send('Hello World');
});*/
// ແບບທີ່ 2 route 
/*app.use( '/api/v1/login',authRoute);
app.use( '/api/v1/product',productionRoute);*/

// ແບບທີ່ 3 route 
readdirSync('./Routes').map((r)=>app.use('/api/v1/', require('./Routes/' + r)));
app.listen(8000, () =>console.log('Server is running...'));