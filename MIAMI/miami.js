
const express = require('express')

const app = express()

//add the view engine after express
const expressHandlebars = require('express-handlebars')
const port = process.env.port || 3000 
//Routes go before 404 and 500 
//app.get('/', (request, response) => { 
  //  response.type('text/plain') 
    //response.send('Miami Travel');
//})
app.get('/',(req,res)=>{
    res.render('home')
 }) 
 app.get('/about',(req,res)=>{
    res.render('about')
 })
 //This generates an error because the parameter names don't match
 // res should be response.. Leave this alone for now 
 app.get('/nightlife',(request,response)=>{
    res.type('text/plain')
    res.send('Miami at Night')
 })
 
 
 //Error handling ->  app.use() basic express route
 app.use((req,res) => {
    res.status(404)
    res.render('404')
 })
 
 //Server Error 500
 app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('500')
 }) 