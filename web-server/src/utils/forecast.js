const request = require('request')

const forecast = (latitude,longitude , callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=a5bba9470c9e5a04f133e3b56329fc0b&query=' +  latitude + ',' +longitude  + '&units=f'

  request({  url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weatherstack',undefined);
    } else if (body.error) {
      callback('Unable to find location',undefined);
    } else {
      callback(undefined, {
        weather_descriptions: body.current.weather_descriptions,
        temperature: body.current.temperature
      });
    }
  })
}

module.exports=forecast