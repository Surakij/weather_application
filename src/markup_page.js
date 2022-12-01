export function markUp(city, temp, icon, lat, long) {
    const body = document.querySelector('body')
    const divContainer = document.createElement('div');
    // const divMapContainer = document.createElement('div');
    const divMap = document.createElement('div');
    const scriptMap = document.createElement('script');
    const divCitTempAndIconContainer = document.createElement('div');
    const cityName = document.createElement('h1');
    const iconWeather = document.createElement('img');
    const tempUnit = document.createElement('span');
    const divSearchContainer = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    const button = document.createElement("button");

    divContainer.classList.add('app_container');
    // divMapContainer.classList.add('map_container');
    divMap.id = 'map'
    divCitTempAndIconContainer.classList.add('city_temp_icon_container');
    tempUnit.classList.add('temp');
    iconWeather.classList.add('weather_icon');
    divSearchContainer.classList.add('search_container');
    input.classList.add('input');


    body.append(divContainer);
    document.head.appendChild(scriptMap)
    divContainer.append(divMap);
    // divMapContainer.prepend(divMap);
    divContainer.append(divCitTempAndIconContainer);
    divCitTempAndIconContainer.append(cityName, tempUnit, iconWeather);
    divContainer.append(divSearchContainer);
    divSearchContainer.append(input);
    divSearchContainer.append(button);


    button.textContent = "Click me";
    cityName.textContent = city;
    tempUnit.textContent = Math.floor(+temp) - 273;
    iconWeather.src = `https://openweathermap.org/img/w/${icon}.png`;
    scriptMap.async = true;
    scriptMap.defer = true;
    scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDjr2xBpii4hZzyM7erXc_MPO9_mufqaE&callback=initMap';
    window.initMap = function () {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: +lat, lng: +long},
            zoom: 8
        });

    };


    return body;
}