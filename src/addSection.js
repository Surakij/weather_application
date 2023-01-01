export function createCityWeatherSection(city, temp, icon) {


    const CitTempAndIconContainer = document.createElement('section');
    const cityName = document.createElement('h1');
    const iconWeather = document.createElement('img');
    const tempUnit = document.createElement('span');


    CitTempAndIconContainer.id = 'weather_cont';
    tempUnit.classList.add('temp');
    iconWeather.classList.add('weather_icon');

    cityName.textContent = city;
    tempUnit.textContent = temp;
    iconWeather.src = icon;


    CitTempAndIconContainer.append(cityName, iconWeather, tempUnit);


return CitTempAndIconContainer;
}

