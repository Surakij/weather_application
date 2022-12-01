import "../css/style.css";
import {markUp} from "./markup_page.js";
import {getCity, getWeatherData} from "./api.js";


let city = '';
let temp = 0;
let icon =''
let latitude, longitude;

const app = async () => {

    await getCity().then(data => {
        console.log(data);
        city = data.city;
        latitude = data.latitude;
        longitude = data.longitude;
    }).catch(error => {
        alert(`Rejected: ${error}`);
    });

    await getWeatherData(city).then(data => {
        temp = data.main.temp;
        icon = data.weather[0].icon;
    }).catch(error => {
        alert(`Rejected: ${error}`);
    });


    markUp(city,temp, icon, latitude, longitude);
}

app();






