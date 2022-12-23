
export function getMap(city) {
    let mapEl = document.getElementById('map');
    if (!mapEl) {
        mapEl = document.createElement('div');
        mapEl.setAttribute('id', 'map');
        document.body.append(mapEl);
    }

    mapEl.textContent = '';
    if (window.mapInit) {
        window.mapInit('map', city);
    }
}