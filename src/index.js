import "../css/style.css";
import {getCity} from "./apiGeo.js"
import {createCityWeatherSection} from "./addSection.js";
import {getWeatherData} from "./apiWeather.js";
import {getMap} from "./addMap.js";
import {createForm} from "./addForm.js";



const app = async list => {

    let form;
    if (localStorage.cityList) {
        let list = localStorage.getItem('cityList');
        form = createForm(list);
    } else {
        form = createForm(list);
    }

    const city = await getCity();
    const weatherArr = await getWeatherData(city);
    let temp = weatherArr[0];
    let icon = weatherArr[1];

    const sectionWeather = createCityWeatherSection(city,temp, icon);
    getMap(city);


    document.body.prepend(sectionWeather, form);



}

app();

