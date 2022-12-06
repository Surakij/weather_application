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
    button.type = 'submit';

    searchContainer.append(input, button, searchList);


    button.addEventListener('click', reloadPage);
    button.addEventListener('click',addList);

    async function reloadPage (e) {
        e.preventDefault();
        if (!input.value) {
            return;
        }

        const newWeather = await getWeatherData(input.value);
        resetWeatherContent(newWeather.name, newWeather);
    };

    function addList() {
        if (searchList.querySelectorAll("li").length > 2) {
            searchList.firstElementChild.remove();
        }
        const searchListUnit = document.createElement('li');
        searchListUnit.innerText = input.value;
        searchList.append(searchListUnit);
        input.value = '';
    };

    return searchContainer;
}