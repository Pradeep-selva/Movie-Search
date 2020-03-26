var express = require('express')
var request= require('request')
var app = express()

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('search')
})

app.get('/results',(req,res)=>{
    var movie= req.query.search
    request('http://www.omdbapi.com/?t='+movie+'&apikey=2a38cf7',(error,response)=>{

        if(!error && response.statusCode==200){
            var data= JSON.parse(response.body)
            res.render('results',{data: data })
        }else{
            res.send('ERROR OCCURED')
        }

    })
})

app.listen(5000, ()=>{
    console.log('movie app is running!')
})