let _markers = [];
let _dotNetMapReference;

export function createMarker(leafletMap, id, latitude, longitude, dotNetMapReference) {
    if (!_dotNetMapReference) {
        _dotNetMapReference = dotNetMapReference;
    }
    
    dotNetMapReference.invokeMethodAsync('LogAsync', "Start createMarker");
    let marker = L.marker([latitude, longitude]);
    marker._id = id;
    dotNetMapReference.invokeMethodAsync('LogAsync', "Marker created");
    marker.bindPopup("<life-point-detail id='" + id + "'></life-point-detail>");
    dotNetMapReference.invokeMethodAsync('LogAsync', "Popup bound");
    marker.addTo(leafletMap);
    dotNetMapReference.invokeMethodAsync('LogAsync', "Marker added to map");
    _markers.push(marker);
}

export function updatePopup(id) {
    _markers.forEach(function (marker) {
        if (marker._id === id) {
            marker.getPopup().update();
            _dotNetMapReference.invokeMethodAsync('LogAsync', "Popup of marker updated");
        }
    })
}