function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 41.084045, lng: -73.874245 },
  });

  var locations = [
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 },
  ];
  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      position: locations[i],
      map: map,
    });
  }
}
