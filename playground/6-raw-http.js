const http = require('http');

  const url = 'http://api.weatherstack.com/current?access_key=a5bba9470c9e5a04f133e3b56329fc0b&query=45,-75&units=f'
  const request = http.request(url, (response) => {
  let data = '';

    response.on('data', (chunk) => {
    data = data + chunk.toString();
  });
  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  })
})

request.end()