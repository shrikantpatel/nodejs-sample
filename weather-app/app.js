const geocode = require("./util/geocode")
const forecast = require("./util/forecast")
const yargs = require('yargs')

const address = process.argv[2]

if (!address) {
    return console.log('pls provide the address')
}

geocode(address, (error, {latitude, longitude, location}) => {
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
})

