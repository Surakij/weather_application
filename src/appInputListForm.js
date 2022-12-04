import {getWeatherData} from "./apiWeather.js";
import {resetWeatherContent} from "./helper";

export function createForm() {

    const searchContainer = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement("button");
    const searchList = document.createElement('ul');

    searchContainer.classList.add('search_container');
    input.classList.add('input');
    searchList.classList.add('search_list');

    input.type = 'text';
    input.placeholder = 'city name';
    button.textContent = "Click me";

    searchContainer.append(input, button);


    button.addEventListener('click', async () => {
        if (!input.value) {
            return;
        }

        const newWeather = await getWeatherData(input.value);
        resetWeatherContent(newWeather.name, newWeather);
    }, () => {
        if (searchList.querySelectorAll("li").length > 10){
            searchList.firstElementChild.remove();
        }
        let text = input.value;
        let searchListUnit = document.createElement('li');
        searchListUnit.innerText = text;
        searchList.append(searchListUnit);
        input.value = '';
    });

    return searchContainer;
}