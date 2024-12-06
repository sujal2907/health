// locations.js

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0}, // Set the initial center of the map
        zoom: 10 // Set the initial zoom level
    });

    // You can add markers for nearby doctors here
    // Example:
    var doctorMarker = new google.maps.Marker({
        position: {lat: 37.7749, lng: -122.4194}, // Example coordinates (San Francisco)
        map: map,
        title: 'Doctor Name' // Example doctor name
    });
}
