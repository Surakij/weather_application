
export function getMap(city) {
    const divMap = document.createElement('div');

    divMap.id = 'map';

    let map;
    window.initMap = function () {
        const geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 0, lng: 0},
            zoom: 10
        });
        geocoder.geocode({'address': city}, function (results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
            } else {
                alert('city not found *');
            }
        });
    };

    return divMap;
}