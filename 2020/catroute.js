'use strict'

app.get('/catinfo',(req, res)=> {
    const cat =
        {
            'name': 'Frank',
            'age' : 6,
            'weight': 5,
        }
    res.json(cat);

});

app.post('/catinfo', (req, res)=>{
    console.log('HTTP POST with body params', req.body);
    res.send('catinfo with HTTP POST =) with name: ${req.body.name} and age ${req.body.age}');

});