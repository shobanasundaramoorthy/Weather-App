//document.getElementById('search-button').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '2e7c38241428a16e1d8603f38f990785';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
//{
   // "cod": 200,
    //"name": "Chennai",
    //"main": {
      //"temp": 29.0,
      //"humidity": 70
   // },
    //"weather": [
      //{
    // "description": "clear sky"
     // }
    //]
  //}
