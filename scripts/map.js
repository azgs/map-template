var app = {
  map: L.map('map', {center: [34, -111], zoom: 6}),
  baseLayer: L.tileLayer('http://{s}.tiles.mapbox.com/v3/some-basemap-id/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.mapbox.com/about/maps/">Terms & Feedback</a>'
  })
};

app.baseLayer.addTo(app.map);