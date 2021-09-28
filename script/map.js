// Map initialization
var mymap = L.map('map').setView([51.509865, -0.118092], 13);
// osm layers
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1Ijoia2V2ZXRpaDg2MSIsImEiOiJja2h4MzFxaG8wOW5pMzBsdGZ1NXFoeHh5In0.hw5mLyF4KWalDgcxAWrmuw',
  }
).addTo(mymap);
// Marker

var myIcon = L.icon({
  iconUrl: '/assets/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

L.marker([51.509865, -0.118092], { icon: myIcon }).addTo(mymap);

// add google streets
googleStreets = L.tileLayer(
  'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }
).addTo(mymap);
