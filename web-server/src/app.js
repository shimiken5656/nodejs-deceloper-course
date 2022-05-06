const path =require('path')
const express = require('express')
const hbs = require('hbs')

const app = express();

//Define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath=path.join(__dirname, '../templates/partials')

//Setup handlers engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name:'cat'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help message',
    name: 'andrew',
    helpText: 'Help page'
  })
})

app.get('/weather',(req, res)=>{
  res.send({
    location: 'Tokyo',
    forecast:'晴'
  })
})



app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew',
    errorMessage: 'Help article not found'
  })
})

//error処理
app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew',
    errorMessage: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})