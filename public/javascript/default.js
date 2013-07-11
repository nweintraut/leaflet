/*global Backbone, jQuery, _, L */

var neils_house = [37.38, -122.2];
var map = L.map('map', { center: neils_house, zoom: 14});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
L.marker(neils_house, {clickable: true})
    .bindPopup("Neil's house").addTo(map);
var marker = [37.377, -122.21];
L.marker(marker, 
    {
        clickable: true, 
        draggable: true, 
        icon: L.icon({iconUrl: 'images/packtpub.png', iconAnchor: [32,32], popupAnchor: [32,0]})
    })
    .bindPopup("Hello custom!")
    .addTo(map);
map.locate({setView: true});