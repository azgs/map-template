var app = {
  map: L.map('map', {center: [34, -111], zoom: 6}),
  baseLayer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.mapbox.com/about/maps/">Terms & Feedback</a>'
  })
};

app.baseLayer.addTo(app.map);
L.geocoderControl().addTo(app.map);
$('#info').waypoint(scrolling, { offset: '50%' });
$('.scroll-btn').click(scrolling);

function scrolling(direction) {
  if (typeof direction !== 'string') direction = $(window).scrollTop() === 0 ? 'down': 'up';

  var position = direction === 'up' ? 0 : $('#info').position().top,
      btnText = position === 0 ? 'About this map' : 'View the map',
      hash = position === 0 ? '#map' : '#info';

  $("html, body").animate({scrollTop: position}, function () {
    var i = $('#mover').find('i');

    window.location.hash = hash;
    $('#mover').text(btnText);
  });
}