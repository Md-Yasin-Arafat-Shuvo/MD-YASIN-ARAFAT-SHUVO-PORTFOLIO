var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var myLatlng = new google.maps.LatLng(23.7104, 90.4070); // Dhaka, Bangladesh coordinates

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12, // Adjust zoom level as needed

    // The latitude and longitude to center the map (always required)
    center: myLatlng,

    // How you would like to style the map. 
    scrollwheel: false,
    styles: [
      {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ff0000"
          }
        ]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // No need for the address array; use Dhaka coordinates directly
  var latlng = myLatlng;
  new google.maps.Marker({
    position: latlng,
    map: map,
    icon: 'images/loc.png' // Replace with your desired marker icon
  });
}

google.maps.event.addDomListener(window, 'load', init);
