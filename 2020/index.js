'use strict';
const express =require('express')
const app= express();
app.use(express.static('public'));

app.get('/', (reg, res) =>{
   console.log('get request to /', req);
    res.send('Hello there demo URL param: ${req.query.demo} and more: ${req.query.more}');

});



app.listen(3000)