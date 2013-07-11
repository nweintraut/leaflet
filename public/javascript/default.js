/*global Backbone, jQuery, _, L */

var map = L.map('map', { center:[52.48626, -1.89042], zoom: 14});
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '%copy; OpenStreetMap contributors'
    }).addTo(map);