export function getMap(city) {
    const divMap = document.createElement('div');
    // const scriptMap = document.createElement('script');

    divMap.id = 'map';
    // document.head.appendChild(scriptMap);
    //
    // scriptMap.async = true;
    // scriptMap.defer = true;
    // scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDjr2xBpii4hZzyM7erXc_MPO9_mufqaE&callback=initMap';


    window.initMap = function () {
        const geocoder = new google.maps.Geocoder();
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 0, lng: 0},
            zoom: 10
        });
        geocoder.geocode({'address': city}, function (results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    return divMap;
}