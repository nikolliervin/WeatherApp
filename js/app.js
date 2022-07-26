const search=document.getElementById('searchTextBox');
const searchButton=document.getElementById('searchBtn');



let weather={
    'apiKey':'0179eede0cda5805bbbf0167236f129d',
    fetchWeather:function(city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city 
            +'&appid='
            + this.apiKey
            )
        .then((response)=>response.json())
        .then((data) => this.displayWeather(data));
    }, 
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure, temp_min, temp_max } = data.main;
        const { speed, deg } = data.wind;
        const { country } = data.sys
        document.getElementById('cityName').innerHTML=name + ', ' + country;
        document.getElementById('temp').innerHTML = Math.round(convert(temp)) + ' ' + '°C';
        document.getElementById('description').innerHTML=description.toUpperCase();
        document.getElementById('humidity').innerHTML=humidity+'%';
        document.getElementById('windspeed').innerHTML=speed+'km/h';
        document.getElementById('winddeg').innerHTML=deg+'°';
        document.getElementById('maxtemp').innerHTML=Math.round(convert(temp_max))+'°C';
        document.getElementById('mintemp').innerHTML=Math.round(convert(temp_min))+'°C';
        document.getElementById('pressure').innerHTML=pressure+' pa';
        document.getElementById('icon').src='https://openweathermap.org/img/wn/'+ icon +'@2x.png'
    }

}

function convert(kelvin){
    return kelvin-273.15;
}

searchButton.addEventListener('click', ()=>{
    weather.fetchWeather(document.getElementById('searchTextBox').value);
})

weather.fetchWeather('London');