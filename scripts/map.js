var app = {
  map: L.map('map', {center: [34, -111], zoom: 6}),
  baseLayer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.mapbox.com/about/maps/">Terms & Feedback</a>'
  })
};

app.baseLayer.addTo(app.map);
L.geocoderControl().addTo(app.map);

function scroller() {
  var setTo = window.location.hash === '#info' ? '#map' : '#info';
  $("html, body").animate({scrollTop: $("section" + setTo).position().top}, function () { window.location.hash = setTo; });
}