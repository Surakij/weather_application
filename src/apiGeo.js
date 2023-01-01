export async function getCity() {
    try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await response.json();
        return data.city;
    } catch (error) {
        return null;
    }
}