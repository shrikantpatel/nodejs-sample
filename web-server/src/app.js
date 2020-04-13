const path = require('path')
const express = require('express')

const app = express()

//define path for public directory and view path
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates')

//setup handle bar engine and corresponding view directory
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//setup the static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Shrikant Patel'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/weather', (req, res) => {
    res.send('Weather app !')
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})