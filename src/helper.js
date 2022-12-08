import {createCityWeatherSection} from "./appCityTempIconSection.js";
import {getMap} from "./appMapDiv.js";


export function resetWeatherContent(city, weather) {

    document.getElementById('map').remove();
    document.getElementById('weather_cont').remove();


    document.body.append(getMap(city));
    document.body.prepend(createCityWeatherSection(city, weather));
}

