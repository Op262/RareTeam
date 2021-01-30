const express = require('express')
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const mongo = require('mongodb');
const assert = require('assert')
var http = express();
//////////////port variable////////////
const DB_URI = "mongodb://localhost:27017/tutorial"
const port = 8080;
//MongoDB connect
mongoose.connect(DB_URI)
// Connection Events
mongoose.connection.once('connected', () => {
    console.log(`DataBase connected to ${DB_URI}`)
})
mongoose.connection.on('error', () => {
    console.log(`MongoDB connection error: ${err}`)
})
mongoose.connection.once('disconnected', () => {
    console.log("MongoDB disconnected")
})
// -------https request----------
http.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);
    res.render('post-new');
    res.render('index');
    res.render('pass')
    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})
// -------------------------------


process.on('SIGINT', ()=>{
    mongoose.connection.close(()=>{
        console.log("DataBase disconnected through termination")
        process.exit(0);
    })
})

//engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
//server static files from public
let publicpath = path.join(__dirname, '/public');
app.use(express.static(publicpath))
/////////////////////////////
//////require middlewares
const bodyPapser = require('body-parser');
const logger = require('morgan');
const { error } = require('console');
///////////Middlewares
app.use(logger('dev'));
app.use(bodyPapser.json());
app.use(bodyPapser.urlencoded({ extended: true}))


/////routes////
app.use('/api/posts', require('./routes/api-posts'))
app.use('/', require('./routes/pages'))







//////////////////////////////
/////functions///////////////
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/contact', (req, res) => {
    let {email, platform} = req.body
    res.render('contact-success', { data: {
        'email': email,
        'platform': platform
    } } );
})

////////////////////////////////////
///////port///////

app.listen(port, () => {
    console.log(`we are listening to port ${port}`)
});
/////////
app.use( express.static( "public" ) );
app.use( express.static( "views" ) );