const request = require("request")


forecast = (latitude, longitde, callback) => {

    const urlWeather = 'https://api.darksky.net/forecast/90faae1a5ebce77d0070064972cb8b1b/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitde)
    request.get({ url: urlWeather, json: true }, (error, response) => {

        var data
        var error
        if (error) {
            error = 'Unable to connect to weather service!'
        } else if (response.body.error) {
            error= 'Unable to find the location in weather service!'
        } else {
             const temperature = response.body.currently.temperature
             const precipProbability = response.body.currently.precipProbability
             data = {temperature, precipProbability}
        }

        callback(error, data)
    })
}

module.exports = forecast