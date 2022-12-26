import {getWeatherData} from "./apiWeather.js";

describe('getWeatherData',
    () => {

        const city = 'Yerevan';

        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                main: {temp: 273},
                weather: [{icon: '50d'}],
            }),
        }))

        beforeEach(() => {
            fetch.mockClear();
        });

        test('testing async fn. should return weather data like temp & icon by giving city', async () => {
            const weatherData = await getWeatherData(city);
            expect(weatherData[0]).toEqual(0);
            expect(weatherData[1]).toEqual('https://openweathermap.org/img/w/50d.png');
            expect(fetch).toHaveBeenCalledTimes(1);

        })

        test('test async func with fail request', async () => {
            fetch.mockImplementationOnce(() => Promise.reject("API is down"));
            const weatherData = await getWeatherData(city);
            expect(weatherData).toEqual(null);
            expect(fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff6f06036194f66a3ce510a3e0bb0c28`);
        })

    })