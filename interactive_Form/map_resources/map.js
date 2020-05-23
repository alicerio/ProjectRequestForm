var poly;
var map;
var paths = {
    lat:[],
    lng:[]
};

// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), { // callback
        zoom: 11,
        center: new google.maps.LatLng(31.837465, -106.2851078)
    });
    poly = new google.maps.Polyline({
        strokeColor: 'blue',
        strokeOpacity: 1.0,
        strokeWeight: 3
    });
    poly.setMap(map);
    // Add a listener for the click event
    map.addListener('click', addLatLng);

}

// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {
    var path = poly.getPath();
    // Because path is an MVCArray, we can simply append a new coordinate
    path.push(event.latLng);

    paths.lat.push(event.latLng.lat());
    paths.lng.push(event.latLng.lng());

    var marker = new google.maps.Marker({
        position: event.latLng,
        title: '#' + path.getLength(),
        map: map
    });
}
//get in between the points
function generateCoordinates(point1,point2, circlesOnLines){
    //holders of origin cordinates
    let lotH = point1.lng;
    let lanH = point1.lat;

    let diffLan = difference(point1.lat, point2.lat)/circlesOnLines;
    let diffLot = difference(point1.lng, point2.lng)/circlesOnLines; 

    let i =0;
    let to_visualize = { lat:point1.lat, lng:point1.lng };

    for(let i = 0; i < circlesOnLines; i++){
        to_visualize.lat += diffLan;
        to_visualize.lng += diffLot;

         var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: to_visualize,
            radius: 50
        });
    }
}
//helper method
function difference(num1, num2){
    return num2 - num1;
}
function pointInTheMiddle(point1,point2){
    let to_visualize = {lat:0,lng:0};
    to_visualize.lng = (point1.lng + point2.lng) / 2; 
    to_visualize.lat = (point1.lat + point2.lat) / 2; 

    //debugging purposes
    var marker = new google.maps.Marker({
        position: to_visualize,
        map: map
    });
    return to_visualize;
}
//circles
function draw() {
    let counter = 0;
    for (i in paths.lat) {
        let to_visualize = { lat: parseFloat(paths.lat[i]), lng: parseFloat(paths.lng[i]) };
        if(counter >= 1){
            let point1 = { lat: parseFloat(paths.lat[counter-1]), lng: parseFloat(paths.lng[counter-1]) };
            generateCoordinates(point1,to_visualize,300);
        }
        var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'blue',
            fillOpacity: 0.35,
            map: map,
            center: to_visualize,
            radius: 50
        });
       counter++;
    }

}
