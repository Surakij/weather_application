import {createCityWeatherSection} from "./addSection.js";
import {getMap} from "./addMap.js";


export function resetWeatherContent(city, weather) {


    document.getElementById('map').remove();
    document.getElementById('weather_cont').remove();

    document.body.prepend(createCityWeatherSection(city, weather));
    getMap(city);

}

