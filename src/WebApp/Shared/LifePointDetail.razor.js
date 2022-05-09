export function createMarker(leafletMap, id, latitude, longitude, dotNetMapReference) {
    dotNetMapReference.invokeMethodAsync('LogAsync', "Start createMarker");
    let marker = L.marker([latitude, longitude]);
    dotNetMapReference.invokeMethodAsync('LogAsync', "Marker created");
    marker.bindPopup("<life-point-detail id='" + id + "'></life-point-detail>");
    dotNetMapReference.invokeMethodAsync('LogAsync', "Popup bound");
    marker.addTo(leafletMap);
    dotNetMapReference.invokeMethodAsync('LogAsync', "Marker added to map");
}