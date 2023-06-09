const express = require('express');
const app = express();
const path = require('path');

// const cors = require('cors);
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
// app.use(express.static(__dirname));
app.use(express.json());
const cors = require('cors');
//console.log("hello";)

const connectDB = require('./config/db');
connectDB();
//cors

//updated cors
const corsOptions = {
    // origin: process.env.ALLOWED_CLIENTS.split(','),
    origin:'*',
    credentials:true,            
    // //access-control-allow-credentials:true
    // //Acces-Control-Allow-Origin = true
    // //acces-control
    optionSuccessStatus:200,
 }
 //console.log("hello");


// const corsOptions = {
//     origin: process.env.ALLOWED_CLIENTS.split(',')
//}
app.use(cors(corsOptions));

app.set('views',path.join(__dirname, '/views'));
app.set('view engine' , 'ejs');


// intitalize all routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));


app.listen(PORT,()=>{
    console.log('Listening on port ' ,PORT );
});
