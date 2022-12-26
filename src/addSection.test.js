import {createCityWeatherSection} from "./addSection.js";

describe('createCityWeatherSection', () => {
    const city = 'Moscow';
    const temp = '0';
    const icon = 'https://openweathermap.org/img/w/50d.png'
    let body;

    beforeEach(() => {
        body = document.createElement('body');
        let section = createCityWeatherSection(city, temp, icon);
        body.append(section);
    })

    test('create basic markup', () => {
        expect(body.querySelector('section')).toBeTruthy();
        expect(body.querySelector('h1')).not.toBe(null);
        expect(body.querySelector('img')).not.toBe(null);
        expect(body.querySelector('span')).toBeTruthy();
    })

    test('testing section HTMLElements having right context', () => {
        expect(body.querySelector('h1').textContent).toEqual(city);
        expect(body.querySelector('img').src).toEqual(icon);
        expect(body.querySelector('span').textContent).toEqual(temp);

    })
})