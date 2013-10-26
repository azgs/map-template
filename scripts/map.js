var app = {
  map: L.map('map', {center: [34, -111], zoom: 6}),
  baseLayer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.mapbox.com/about/maps/">Terms & Feedback</a>'
  })
};

app.baseLayer.addTo(app.map);
L.geocoderControl().addTo(app.map);

// Add click effect to the legend toggler
d3.select('#toggle-info').on('click', function () {
  var enabled = d3.select('#info').classed('hidden');
  d3.select('#info').classed('hidden', !enabled);
});