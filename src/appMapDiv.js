export function getMap(location) {
    const divMap = document.createElement('div');
    const scriptMap = document.createElement('script');

    divMap.id = 'map';
    document.head.appendChild(scriptMap);

    scriptMap.async = true;
    scriptMap.defer = true;
    scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDjr2xBpii4hZzyM7erXc_MPO9_mufqaE&callback=initMap';


    window.initMap = function () {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: +location.latitude, lng: +location.longitude},
            zoom: 10
        });
    };

    return divMap;
}