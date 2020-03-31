const request = require("request")

const urlWeather = 'https://api.darksky.net/forecast/90faae1a5ebce77d0070064972cb8b1b/37.8267,-122.4233'
const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/dallas.json?access_token=pk.eyJ1Ijoic2hyaWthbnRwYXRlbCIsImEiOiJjazhkYW1zeHkwcHJxM2ZucHRvcXEyZ250In0.UcOkWxHX9O-mNMuZ5_Z5kA&limit=1'

request.get({ url: urlWeather, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find the location in weather service!')
    } else {
        console.log('Its currently %s degrees out. There is a %s % chance of rain', response.body.currently.temperature, response.body.currently.precipProbability)
    }
})


request.get({ url: urlMapBox, json: true }, (error, response) => {
    debugger
    if (error) {
        console.log('Unable to connect to location service!')
    } else if (response.body.error || response.body.features.length === 0) {
        console.log('Unable to find the location in location service!')
    } else {
        console.log('co-ordinates - %s', response.body.features[0].center)
    }
})