import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


console.log("app/javascript/plugins/init_mapbox.js running");

const lostMapElement = document.getElementById('lost-map');
const foundMapElement = document.getElementById('found-map');

// ALL THIS IS FOR THE LOST PETS

const buildMap = () => {
  mapboxgl.accessToken = process.env.MAPBOX_API_KEY;
  return new mapboxgl.Map({
    container: 'lost-map',
    style: 'mapbox://styles/mapbox/streets-v10'
  });
};


const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow); // add this

    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      .setPopup(popup) // add this
      .addTo(map);
  });
};

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
};


const initLostMapbox = () => {
  if (lostMapElement) {
    console.log("Lost map found");
    console.log("Adding the lost pets map");
    const map = buildMap();
    const markers = JSON.parse(lostMapElement.dataset.markers);
    addMarkersToMap(map, markers);
    fitMapToMarkers(map, markers);
    map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl }));
  }
};

// END OF LOST PETS MAP JAVASCRIPT

// ALL THIS IS FOR THE FOUND PETS

const buildFoundMap = () => {
  mapboxgl.accessToken = process.env.MAPBOX_API_KEY;
  return new mapboxgl.Map({
    container: 'found-map',
    style: 'mapbox://styles/mapbox/streets-v10'
  });
};


const addFoundMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow); // add this

    new mapboxgl.Marker()
      .setLngLat([ marker.lng, marker.lat ])
      .setPopup(popup) // add this
      .addTo(map);
  });
};

const fitMapToFoundMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
};


const initFoundMapbox = () => {
  if (foundMapElement) {
    console.log("Found map found");
    console.log("Adding the found pets map");
    const map = buildFoundMap();
    const markers = JSON.parse(foundMapElement.dataset.markers);
    addFoundMarkersToMap(map, markers);
    fitMapToFoundMarkers(map, markers);
    map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl }));
  }
};

// END OF FOUND PETS JAVASCRIPT



export { initLostMapbox };
export { initFoundMapbox };
