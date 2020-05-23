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
    console.log(poly.getPath());
    // console.log(path);
    // Because path is an MVCArray, we can simply append a new coordinate
    // and it will automatically appear.
    //
    //
    path.push(event.latLng);
 //   paths.push(path);

    paths.lat.push(event.latLng.lat());
    paths.lng.push(event.latLng.lng());
    console.log(paths);
    var marker = new google.maps.Marker({
        position: event.latLng,
        title: '#' + path.getLength(),
        map: map
    });
    0.02952575683

    


}
//get in between the points
function generateCoordinates(point1,point2){
    let lngH = point1.lng;
    let lanH = point1.lat;
    let diffLan = difference(point1.lat, point2.lat)/100;
    let diffLot = difference(point1.lng, point2.lng)/100;
    let i =0;
    console.log(lanH);
    console.log(point2.lat);
    while(i!=100){
        if(lanH < point2.lat){
    //        alert("at least 1")
            console.log("lat " + lanH + "< " + point2.lan + " so " + lanH + "  + 0.001 = ");
            lanH +=  diffLan; // 0.00000000000001;
            console.log(lanH);
        }
        if(lanH > point2.lat){
      //      alert("at least 1")
            console.log("lat " +lanH + "> " + point2.lan + " so " + lanH + "  - 0.001 = ");
            lanH -= diffLan; //0.00000000000001;
            console.log(lanH);
        }
        if(lngH < point2.lng){
            console.log("lon " +lngH + "< " + point2.lng + " so " + lngH + "  + 0.001 = ");
            lngH += diffLot; //0.00000000000001;
           console.log(lngH);
        }
        if(lngH > point2.lng){
            console.log("lon " +lngH + "> " + point2.lng + " so " + lngH + "  - 0.001 = ");
            lngH -=diffLot; //0.00000000000001;
            console.log(lngH);
        }

   
        paths.lat.push(lanH);
        paths.lng.push(lngH);
        i++;
    }
    //console.log("end");
   // console.log(paths);
}
function difference(num1, num2){
    return num1 - num2;
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
    console.log("before drawing");
    console.log(paths);
    let point1 = { lat: parseFloat(paths.lat[0]), lng: parseFloat(paths.lng[0]) };
    let point2 = { lat: parseFloat(paths.lat[1]), lng: parseFloat(paths.lng[1]) };
    generateCoordinates(point1,point2);

    for (i in paths.lat) {
        let to_visualize = { lat: parseFloat(paths.lat[i]), lng: parseFloat(paths.lng[i]) };
        console.log(to_visualize);
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

/*
var map;

function initMap() {
    myOptions = { // callback
        zoom: 11,
        center: new google.maps.LatLng(31.837465, -106.2851078)
    }

map = new google.maps.Map(document.getElementById('map'), myOptions)
	 var drawingManager = new google.maps.drawing.DrawingManager({
		    
		    drawingControl: true,
		    drawingControlOptions: {
		      position: google.maps.ControlPosition.TOP_RIGHT,
		      drawingModes: [
                google.maps.drawing.OverlayType.POLYGON,
                //google.maps.drawing.OverlayType.LINE,
		        google.maps.drawing.OverlayType.POLYLINE
		      ]
		    },
	    polygonOptions: {
	    	strokeColor: '#75ad3e',
	        fillColor: '#75ad3e',
	        fillOpacity: 0.35,
	        strokeWeight: 2,
	        clickable: true,
	        editable: true,
	        draggable:true
	      }
	});
    	drawingManager.setMap(map);
    	
    	google.maps.event.addListener(drawingManager, 'overlaycomplete', function (OverlayCompleteEvent) {
    		var bounds = OverlayCompleteEvent.overlay.getPath().getArray();
    		console.log(bounds);
          alert(bounds.toString());

    		 });
            }
    
*/