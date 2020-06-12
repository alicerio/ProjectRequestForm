/** 
 * For testing purposes
 *  
 */


function circleTest() {
    // point
    image = "../img/crash.png";
    let to_visualize1 = {
        lat: parseFloat(32.63161345),
        lng: parseFloat(-106.2711802)
    };

    let point = new google.maps.Marker({
        position: to_visualize1,
        title: to_visualize1.lat + " " + to_visualize1.lng, //titleH,
        // value: '',
        icon: image
    });
    // draw by 1 type at a time

    point.setMap(map);
    points.push(point);
    let to_visualize2 = {
        lat: parseFloat(31.6316134530005),
        lng: parseFloat(-106.27118022499)
    };
    var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: 'blue',
        fillOpacity: 0.35,
        map: map,
        center: to_visualize2,
        radius: 50
    });


   alert(check_a_point(to_visualize1.lng, to_visualize1.lat, to_visualize2.lng, to_visualize2.lat, 0.004254));

}

function checkMaster(circles, crashes) {
  //  console.log(circles);
  //  console.log(crashes);
    let inside = [];
 //   console.log(crashes[0]);
 //   console.log(circles[0].length);
  //  console.log(crashes.length);
  //  console.log(typeof crashes);
    for (index in circles) {
        for (j in crashes) {
            if (check_a_point(crashes[j].lng, crashes[j].lat, circles[0][index].lng, circles[0][index].lat, 0.004254)) {
                let to_visualize = {
                    lat: parseFloat(crashes[0].lat),
                    lng: parseFloat(crashes[0].lng)
                };
                inside.push(to_visualize);
            }
        }
    }
    console.log(inside);
    return inside;
}

function check_a_point(x, y, circlex, circley, r) {
    /*  console.log(a);
      console.log(b);
      console.log(x);
      console.log(y);
      console.log(r);*/
    var dist = (x - circlex) * (x - circlex) + (y - circley) * (y - circley);
    r *= r;
    // console.log(dist + " " + r);
    if (dist < r) return true;
    return false;

    /*
        var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
        r *= r;
        if (dist_points < r) {
            return true;
        }
        return false;
        */
}