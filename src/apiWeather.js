export async function getWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff6f06036194f66a3ce510a3e0bb0c28`);
        let data = await response.json();
        let temp = Math.floor(data.main.temp) - 273;
        let icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        return [temp, icon];
    } catch (error) {
        return null;
    }
}



