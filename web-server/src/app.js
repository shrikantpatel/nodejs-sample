const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

const app = express()

//define path for public directory and view path
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handle bar engine and corresponding view directory
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup the static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Shrikant Patel'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Shrikant Patel'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Shrikant Patel',
        helpText: 'This website provides weather information, contact us help@weather.com'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error:'Address is required'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error})
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error})
            }
            res.send({
                location,
                forecast : forecastData,
                address : req.query.address
            })
        })
    })

})

app.get('/weather', (req, res) => {
    res.send('Weather app !')
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shrikant Patel',
        errorText: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Shrikant Patel',
        errorText: 'Sorry, this page not present'
    })
})

app.listen(3000, () => {
    console.log('server started on port 3000')
})