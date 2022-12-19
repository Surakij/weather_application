import {getWeatherData} from "./apiWeather.js";
import {resetWeatherContent} from "./helper";

export function createForm(list) {

    const searchContainer = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement("button");
    const searchList = document.createElement('ul');


    searchContainer.id = 'search_container';
    input.classList.add('input');
    searchList.id = 'search_list';

    input.type = 'text';
    input.placeholder = 'city name';
    button.textContent = "Click me";
    button.type = 'submit';

    if (list) {
        searchList.innerHTML = list;
        cityReloadByClick();

    }

    searchContainer.append(input, button, searchList);

    button.addEventListener('click', reloadPage);

    let error;

    async function reloadPage(e) {
        e.preventDefault();
        if (!input.value || input.value.trim() === '' || !isNaN(Number(input.value))) {
            alert('Please enter a city');
            input.value = '';
            return;
        }
        try {
            const weatherData = await getWeatherData(input.value);
            if (weatherData.message) {
                alert(weatherData.message);
                input.value = '';
                error = weatherData.message;

            } else {
                resetWeatherContent(weatherData.name, weatherData);
                console.log(error);
                addList();
            }
        } catch (error) {
            console.log(error)
        }

    }

    function addList() {
        if (searchList.querySelectorAll("li").length > 9) {
            searchList.firstElementChild.remove();
        } else if (!input.value || input.value.trim() === '' || !isNaN(Number(input.value))) {
            return;
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
                try {
                    const newWeather = await getWeatherData(item.innerText);
                    if (newWeather.message) {
                        alert(newWeather.message);
                        return;
                    }
                    resetWeatherContent(newWeather.name, newWeather);
                } catch (error) {
                    console.log(error)
                }

            })
        })
    }

    return searchContainer;
}