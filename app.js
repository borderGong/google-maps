let map;
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.905, lng: 116.4},
        //   styles: styles,
        zoom: 12
    });
}