/*global Backbone, jQuery, _, L */

var map = L.map('map', { center:[37.38, -122.2], zoom: 14});
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);