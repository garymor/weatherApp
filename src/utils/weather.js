const fetch = require('node-fetch');

let weather = {
    forecast:''
}

module.exports = async (location) => { 
    const url = `http://api.weatherstack.com/current?access_key=4edb69d0edd445720fa6949592691ad2&query=${location}` ;
    let result =  await fetch(url).then(data => data.json()).then(val => val
    )
    return result
}