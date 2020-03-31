const geocode = require("./util/geocode")
const forecast = require("./util/forecast")

geocode('mumbai', (error, data) => {
    console.log(error)
    console.log(data)
    location = data
})

forecast(0,0, (error, data) => {
    console.log(error)
    console.log(data)
})