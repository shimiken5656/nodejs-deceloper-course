const request = require('request')

const forecast = (latitude,longitude , callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=a5bba9470c9e5a04f133e3b56329fc0b&query=' +  latitude + ',' +longitude  + '&units=f'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weatherstack',undefined);
    } else if (response.body.error) {
      callback('Unable to find location',undefined);
    } else {
      callback(undefined, {
        weather_descriptions: response.body.current.weather_descriptions,
        temperature: response.body.current.temperature
      });
    }
  })
}

module.exports=forecast