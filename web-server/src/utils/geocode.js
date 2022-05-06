const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoid2llbmVydGVzdHRlc3QiLCJhIjoiY2wyaWV6ZjIwMG1vbjNjb2pka2w4aTkwdiJ9.q0vmxfO9cZJlnMDds23GYg'

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to Geocoding', undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location Try another Search", undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      });
    }
  })
}

module.exports =geocode