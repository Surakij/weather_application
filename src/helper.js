import {createCityWeatherSection} from "./appCityTempIconSection.js";
import {createForm} from "./appInputListForm.js";
import {getMap} from "./appMapDiv.js";

export function resetWeatherContent(city, weather) {
    console.log(city);
    // localStorage.setItem('city', JSON.stringify(location));
    document.body.innerHTML = '';
    const sectionWeather = createCityWeatherSection(city, weather);
    const form = createForm();
    const map = getMap(city);
    document.body.append(sectionWeather, form, map)
}