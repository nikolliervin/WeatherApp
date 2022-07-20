let weather={
    'apiKey':'0179eede0cda5805bbbf0167236f129d',
    fetchWeather:function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
        .then((response)=>response.json())
        .then((data)=> console.log(data))
    }, 
}