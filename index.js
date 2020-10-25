var express =  require("express");
require('dotenv').config();
var path = require("path");
var handlebars =  require("express-handlebars");
var fupload= require("express-fileupload");




var port= process.env.PORT || 8080;

var app= express();



app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(fupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));




app.engine('hbs', handlebars({extname:'.hbs', defaultLayout:'layout'}));
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname,'views'));

app.use(express.static("static"));


app.use('/', require('./routes/router')); 



app.listen(port, ()=> {console.log(`server started at Port ${port}`)})