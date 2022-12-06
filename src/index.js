import "../css/style.css";
import {getCity} from "./apiGeo.js"
import {createCityWeatherSection} from "./appCityTempIconSection.js";
import {getWeatherData} from "./apiWeather.js";
import {getMap} from "./appMapDiv.js";
import {createForm} from "./appInputListForm.js";


const app = async () => {

    const locationData = await getCity();
    const weatherData = await getWeatherData(locationData.city);
    const sectionWeather = createCityWeatherSection(locationData.city, weatherData);
    const map = getMap(locationData.city);
    const form = createForm();

    document.body.append(sectionWeather, form, map)


}

app();

