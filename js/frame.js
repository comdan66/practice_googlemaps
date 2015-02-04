/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function() {
  var $map = $('#map');
  var map  = null;

  function initialize () {

    var mapOptions = {
      zoom: 17,
      scaleControl: true,
      navigationControl: false,
      mapTypeControl: false,
      zoomControl: true,
      scrollwheel: true,
      streetViewControl: false,
      center: new google.maps.LatLng (23.568596231491233, 120.3035703338623),
    };
    map = new google.maps.Map ($map.get (0), mapOptions);

    var citymap = {};

    citymap['chicago'] = {
      center: new google.maps.LatLng(23.568596231491233, 120.3035703338623),
      population: 10
    };

    for (var city in citymap) {
      var populationOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: 'rgba(39, 40, 34, .4)',
        fillOpacity: 0.35,
        map: map,
        center: citymap[city].center,
        draggable: true,
        radius: Math.sqrt(citymap[city].population) * 100
      };
      // Add the circle for this city to the map.
      cityCircle = new google.maps.Circle(populationOptions);
    }

  }

  google.maps.event.addDomListener (window, 'load', initialize);
});

