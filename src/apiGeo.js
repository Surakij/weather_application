export async function getCity() {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    return await response.json();
}