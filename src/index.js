import "../css/style.css";
import {getCity} from "./apiGeo.js"
import {createCityWeatherSection} from "./appCityTempIconSection.js";
import {getWeatherData} from "./apiWeather.js";
import {getMap} from "./appMapDiv.js";
import {createForm} from "./appInputListForm.js";



const app = async () => {

    let form;
    if (localStorage.cityList) {
        let list = localStorage.getItem('cityList');
        form = createForm(list);
    } else {
        form = createForm();
    }

    const locationData = await getCity();
    const weatherData = await getWeatherData(locationData.city);
    const sectionWeather = createCityWeatherSection(locationData.city, weatherData);
    getMap(locationData.city);


    document.body.prepend(sectionWeather, form);



}

app();

