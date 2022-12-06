import {createCityWeatherSection} from "./appCityTempIconSection.js";
import {getMap} from "./appMapDiv.js";
import {createForm} from "./appInputListForm.js";

export function resetWeatherContent(city, weather) {
    localStorage.setItem('city', JSON.stringify(city));

     document.getElementById('map').remove();
     document.getElementById('weather_cont').remove();


    document.body.append(getMap(city));
    document.body.prepend(createCityWeatherSection(city, weather));
}