var express = require('express');
var todoController = require('./controllers/todoController')

var app= express();

app.set('view engine','ejs');

app.use('/assets',express.static('./assets')); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));


todoController(app);

app.listen(3000);
console.log('You are listening to port 3000');
