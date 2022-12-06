
export function createCityWeatherSection(city, weather) {


    const CitTempAndIconContainer = document.createElement('section');
    const cityName = document.createElement('h1');
    const iconWeather = document.createElement('img');
    const tempUnit = document.createElement('span');


    CitTempAndIconContainer.id = 'weather_cont';
    tempUnit.classList.add('temp');
    iconWeather.classList.add('weather_icon');

    cityName.textContent = city;
    tempUnit.textContent = Math.floor(+weather.main.temp) - 273;
    iconWeather.src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;


    CitTempAndIconContainer.append(cityName, tempUnit, iconWeather);


return CitTempAndIconContainer;
}

