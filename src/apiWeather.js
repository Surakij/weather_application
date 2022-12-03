export async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ff6f06036194f66a3ce510a3e0bb0c28`);
    const result = await response.json();
    console.log(result);
    return result;
}



