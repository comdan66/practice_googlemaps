/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function() {
  var $map = $('#map');
  var map  = null;

  function animateCircle() {
    var count = 0;

    window.setInterval (function() {
      count = (count + 1) % 200;

      var icons = line.get('icons');
      icons[0].offset = (count / 2) + '%';
      line.set('icons', icons);
    }, 10);
  }

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

    var lineCoordinates = [
      new google.maps.LatLng (23.568596231491233, 120.3035703338623),
      new google.maps.LatLng (23.569596231491233, 120.3035703338623),
      new google.maps.LatLng (23.568596231491233, 120.3135703338623)
    ];

    var lineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      strokeColor: '#393'
    };
    line = new google.maps.Polyline ({
      path: lineCoordinates,
      icons: [{
        icon: lineSymbol,
        offset: '100%'
      }],
      map: map
    });

    animateCircle();

  }

  google.maps.event.addDomListener (window, 'load', initialize);
});

