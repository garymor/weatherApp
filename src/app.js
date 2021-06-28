const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('./utils/weather')


const app = express();  

const publicDirectoryPath = path.join(__dirname,'../public')
const viewspath = path.join( __dirname , '../templates/views')
const partialsPath = path.join( __dirname , '../templates/partials')

app.set('view engine','hbs')
app.set('views', viewspath);
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'plain o G'
    })
})

app.get('/weather',(req,res) =>{
    let location = req.query.location 
    if(!req.query.location){
        return res.send({
            weatherinfo:'[]',
            helpMessage: 'u need to prvide location search Q'
        })
     }
     
     weather(location).then(val => {
        res.setHeader('Content-Type', 'application/json');
        res.json(JSON.stringify(val))
        })
     
     

})

app.get('/products',(req,res)=>{
    let rq = req.query ;

    if (!req.query.search){
     return    res.send({
            err:'you must provide search key'
        })
    }

    res.send({
        products:[],
        rq
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        helpText:'this is some helpful text'
    })
} )

app.get('/help/*',(req,res)=>{
    res.render('404',{
        texterror:'no help page found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        texterror:'no page found'
    })
})

app.listen('3000')