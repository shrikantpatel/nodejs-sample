const request = require('request')

const geocode = (location, callback) => {
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoic2hyaWthbnRwYXRlbCIsImEiOiJjazhkYW1zeHkwcHJxM2ZucHRvcXEyZ250In0.UcOkWxHX9O-mNMuZ5_Z5kA&limit=1'
    
    request.get({ url, json: true }, (error, {body}) => {
        
        var error
        var data

        if (error) {
            error = 'Unable to connect to location service!'
        } else if (body.error || body.features.length === 0) {
            error = 'Unable to find the location in location service!'
        } else {
            latitude = body.features[0].center[1]
            longitude = body.features[0].center[0]
            location = body.features[0].place_name
            data = { latitude, longitude, location }
        }
        callback(error, data)
    })
}

module.exports = geocode