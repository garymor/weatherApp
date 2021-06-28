const fetch = require('node-fetch');
const url = 'http://api.weatherstack.com/current?access_key=4edb69d0edd445720fa6949592691ad2&query=%20%22tel%20aviv%22' ;

let weather = {
    forecast:''
}

module.exports = async (location) => { 
    const url = `http://api.weatherstack.com/current?access_key=4edb69d0edd445720fa6949592691ad2&query=${location}` ;
    let result =  await fetch(url).then(data => data.json()).then(val => val
    )
    return result
}