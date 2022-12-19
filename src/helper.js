import {createCityWeatherSection} from "./appCityTempIconSection.js";
import {getMap} from "./appMapDiv.js";


export function resetWeatherContent(city, weather) {


    document.getElementById('map').remove();
    document.getElementById('weather_cont').remove();

    document.body.prepend(createCityWeatherSection(city, weather));
    document.body.append(getMap(city));
    createScriptGoogleMap ();
}

export function createScriptGoogleMap () {
    removeGoogleMapScript()
    const scriptMap = document.createElement('script');

    scriptMap.id = "script_map";
    scriptMap.defer = true;
    scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDjr2xBpii4hZzyM7erXc_MPO9_mufqaE&callback=initMap';

    document.head.appendChild(scriptMap);

}

function removeGoogleMapScript() {
    // console.debug('removing google script...');
    let keywords = ['maps.googleapis'];

    //Remove google from BOM (window object)
    window.google = undefined;

    //Remove google map scripts from DOM
    let scripts = document.head.getElementsByTagName("script");
    for (let i = scripts.length - 1; i >= 0; i--) {
        let scriptSource = scripts[i].getAttribute('src');
        if (scriptSource != null) {
            if (keywords.filter(item => scriptSource.includes(item)).length) {
                scripts[i].remove();
                // scripts[i].parentNode.removeChild(scripts[i]);
            }
        }
    }
}

