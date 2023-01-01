import {getWeatherData} from "./apiWeather.js";
import {resetWeatherContent} from "./helper";


/**
 * @param {string} list
 */

export function createForm(list) {

    const searchContainer = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement("button");
    const searchList = document.createElement('ul');


    searchContainer.id = 'search_container';
    input.classList.add('input');
    searchList.id = 'search_list';

    searchContainer.action = '#';
    searchContainer.onsubmit = button.addEventListener('click', reloadPage);
    input.type = 'text';
    input.placeholder = 'city name';
    button.textContent = "search";
    button.type = 'submit';


    if (list) {
        searchList.innerHTML = list;
        cityReloadByClick();
    }

    searchContainer.append(input, button, searchList);

    async function reloadPage(e) {
        e.preventDefault();
        if (!input.value || input.value.trim() === '' || !isNaN(Number(input.value))) {
            alert('Please enter a city');
            input.value = '';
            return;
        }
        try {
            const weatherArr = await getWeatherData(input.value);
            let temp = weatherArr[0], icon = weatherArr[1];
            resetWeatherContent(input.value, temp, icon);
            addList();
        } catch (error) {
            alert('Please try again');
            input.value = '';
        }
    }

    function addList() {
        if (searchList.querySelectorAll("li").length > 9) {
            searchList.firstElementChild.remove();
        }
        const searchListUnit = document.createElement('li');
        searchListUnit.innerText = input.value;
        searchList.append(searchListUnit);
        input.value = '';

        localStorage.setItem('cityList', searchList.innerHTML);

        cityReloadByClick();
    }

    function cityReloadByClick() {
        searchList.querySelectorAll('li').forEach((item) => {
            item.addEventListener('click', async () => {
                const newWeather = await getWeatherData(item.innerText);
                let temp = newWeather[0], icon = newWeather[1];
                resetWeatherContent(item.innerText, temp, icon);
            })
        })
    }

    return searchContainer;
}