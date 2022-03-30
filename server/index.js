//nn
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");

const express = require('express')
const createError = require('http-errors')
const path = require('path')
const configs = require('./config')
const app = express();

const config = configs[app.get('env')]


//nn
dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

const connectDB = require('./database/connection');

// log requests
app.use(morgan('tiny'));
// mongodb connection
connectDB();
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

app.set('view engine','ejs');
app.set('view engine','pug');


if(app.get('env') === 'development')
    app.locals.pretty = true
app.set('views',path.join(__dirname, "../views"))
app.locals.title = config.sitename;

app.use((req,res,next) =>{
    console.log(`${req.protocol}://${req.headers.host}`);
    res.locals.rendertime  = new Date();
    return next();
})

const routes = require('./routes')
app.use(express.static('assets'))

//don't look for ico
app.get('/favicon.ico',(req,res,next) => {
    return res.sendStatus(204);
})

app.use('/',routes())

app.use((req,res,next) => {
    return next(createError(404, "File not found"))
})

app.use((err, req,res, next) =>{
    res.locals.message = err.message;
    const status = err.status || 500
    res.locals.status = status
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(status)
    return res.render('error')
})


app.listen(PORT,()=>{
    console.log("running on port "+PORT)
});

module.exports = app;
