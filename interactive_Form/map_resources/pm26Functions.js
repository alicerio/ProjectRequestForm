/** 
 * For testing purposes
 *  
*/


function pm26Data() {
    console.log("inside 26");
    let mode=1;
    let pm26Data = {
        goodTX: 0,
        fairTX: 0,
        poorTX: 0,
        noDataTX: 0,

        goodNM: 0,
        fairNM: 0,
        poorNM: 0,
        noDataNM: 0,

        tx_good_count:0,
        tx_fair_count:0,
        tx_poor_count:0,
        tx_no_data_count:0,

        nm_good_count:0,
        nm_fair_count:0,
        nm_poor_count:0,
        nm_no_data_count: 0,

        dynamicTot: 0,
        dynamicPoor:0,

        totTXBridges:0,
        totNMBridges: 0,
        tnodatabridges:0,

        lowestRating:0
    };

    let data_for_php = 0;
    let shape = "shape";
    let php_handler = "./map_resources/map_handler.php";

    if (mode == 0 || mode == 1) { // if we want regional (default) data
        let key = 'all_pm26';
        data_for_php = { key: key };
    } 

    console.log(php_handler);
    console.log(data_for_php);

    $.get(php_handler, data_for_php, function (data) {
        console.log("returned");
        console.log(data);
        let image = "./img/markers/crash.png";
        let condition = '';
        var lowestRating = 0;

        for (index in data.shape_arr) { // Organize information into dictionaries
            let deck_cond_ = parseInt(data.shape_arr[index]['deck_cond_']);
            let superstruc = parseInt(data.shape_arr[index]['superstruc']);
            let substruc_c = parseInt(data.shape_arr[index]['substruc_c']);
            let region = data.shape_arr[index]['region'];
            let type = data.shape_arr[index]['mode'];
          //  let typeHolder = currentType;
            lowestRating = Math.min(deck_cond_, superstruc, substruc_c);

         
                //count bridges by region
                if (region == "TX" || region == "Texas") {
                    pm26Data.totTXBridges++;
                } else if (region == "NM" || region == "New Mexico") {
                    pm26Data.totNMBridges++;
                }

                // Count Conditions by Region. Used for Graph
                if (lowestRating >= 7 && lowestRating <= 9) {
                    condition = 'Good Condition';
                    image = "../img/crash.png";
                    if (region == "TX" || region == "Texas") {
                        pm26Data.tx_good_count++;
                    } else {
                        pm26Data.nm_good_count++;
                    }
                } else if (lowestRating >= 5 && lowestRating <= 6) {
                    condition = 'Fair Condition';
                    image = "../img/crash.png";
                    if (region == 'TX' || region == "Texas") {
                        pm26Data.tx_fair_count++;
                    } else {
                        pm26Data.nm_fair_count++;
                    }
                } else if (lowestRating >= 0 && lowestRating <= 4) {
                    condition = 'Poor Condition';
                    image = "../img/crash.png";
                    if (region == 'TX' || region == "Texas") {
                        pm26Data.tx_poor_count++;
                    } else {
                        pm26Data.nm_poor_count++;
                    }
                } else if (lowestRating == 999) {
                    condition = 'No data';
                    image = "../img/crash.png";
                    if (region == 'TX' || region == "Texas") {
                        pm26Data.tx_no_data_count++;
                    } else {
                        pm26Data.nm_no_data_count++;
                    }
                } else {//null
                    condition = 'No data';
                    image = "../img/crash.png";
                    if (region == 'TX' || region == "Texas") {
                        pm26Data.tx_no_data_count++;
                    } else {
                        pm26Data.nm_no_data_count++;
                    }
                }
            
            
            let holder = [];

            if (mode == 1 || mode == 2 || mode == 4)  { // mode 1 and 2 allows us to draw points 
                holder.push(wktFormatterPoint(data.shape_arr[index][shape]));
                holder = holder[0][0]; // Fixes BLOBs
                let to_visualize = { lat: parseFloat(holder[0].lat), lng: parseFloat(holder[0].lng) };
                let titleH = condition + ": " + lowestRating;
                if (lowestRating == 999) {
                    titleH = condition;
                }
                let point = new google.maps.Marker({
                    position: to_visualize,
                    title: titleH,
                   // value: '',
                    icon: image
                });
                // draw by 1 type at a time
            
                    point.setMap(map);
                    points.push(point);
                
               
            }

        }

        // tot counts
        let totTX = pm26Data.tx_good_count + pm26Data.tx_fair_count + pm26Data.tx_poor_count + pm26Data.tx_no_data_count;
        let totNM = pm26Data.nm_good_count + pm26Data.nm_fair_count + pm26Data.nm_poor_count + pm26Data.nm_no_data_count;
        let totBad = pm26Data.tx_poor_count + pm26Data.nm_poor_count;
        let mpoArea = totTX + totNM;
        let mpo = ((totBad / mpoArea) * 100).toFixed(2);

        pm26Data.tnodatabridges = pm26Data.tx_no_data_count + pm26Data.nm_no_data_count;
        pm26Data.dynamicTot = pm26Data.totTXBridges + pm26Data.totNMBridges;
        pm26Data.dynamicPoor = (((pm26Data.tx_poor_count + pm26Data.nm_poor_count) / pm26Data.dynamicTot) * 100).toFixed(2);

        //formulas
        if (pm26Data.tx_good_count != 0) {
            pm26Data.goodTX = ((pm26Data.tx_good_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }
        if (pm26Data.tx_fair_count != 0) {
            pm26Data.fairTX = ((pm26Data.tx_fair_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }
        if (pm26Data.tx_poor_count != 0) {
            pm26Data.poorTX = ((pm26Data.tx_poor_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }
        if (pm26Data.tx_no_data_count != 0) {
            pm26Data.noDataTX = ((pm26Data.tx_no_data_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }
        //nm
        if (pm26Data.nm_good_count != 0) {
            pm26Data.goodNM = ((pm26Data.nm_good_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }
        if (pm26Data.nm_fair_count != 0) {
            pm26Data.fairNM = ((pm26Data.nm_fair_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }
        if (pm26Data.nm_poor_count != 0) {
            pm26Data.poorNM = ((pm26Data.nm_poor_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }
        if (pm26Data.nm_no_data_count != 0) {
            pm26Data.noDataNM = ((pm26Data.nm_no_data_count / pm26Data.dynamicTot) * 100).toFixed(2);
        }

        if (mode == 1) {
           // regionalText(pm26Data);
        }

    }); 
}

//draw Chart
function chart_pm26(g1, data) {
    //  pm26Percentates();
    var myChart = new Chart(g1, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [
                {
                    label: data.tx_good_count + " Good",
                    data: [data.goodTX],
                    backgroundColor: [
                        'rgba(30, 130, 76, 1)',
                    ],
                    borderColor: [
                        'rgba(30, 130, 76, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label: data.tx_fair_count + ' Fair',
                    data: [data.fairTX],
                    backgroundColor: [
                        'rgba(247, 202, 24, 1)',
                    ],
                    borderColor: [
                        'rgba(247, 202, 24, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label:data.tx_poor_count +   ' Poor',
                    data: [data.poorTX],
                    backgroundColor: [
                        'rgba(242, 38, 19, 1)',
                    ],
                    borderColor: [
                        'rgba(242, 38, 19, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label:data.tx_no_data_count +  ' No Data',
                    data: [data.noDataTX],
                    backgroundColor: [
                        'rgba(149, 165, 166, 1)',
                    ],
                    borderColor: [
                        'rgba(149, 165, 166, 1)',

                    ],
                    borderWidth: 1
                }]
        },
        options: {
            responsive: true,
            legend: {
                labels: {
                    fontSize: 14,
                    boxWidth: 15
                }
            },
            title: {
                display: true,
                text: 'Texas (' + data.totTXBridges+ ' bridges)'
            },
            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage',
                        },
                    },
                ],
            },
        }
    });

}

function chart_pm26_2(g2,data){
    myChart2 = new Chart(g2, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [
                {
                    label: data.nm_good_count + ' Good',
                    data: [data.goodNM],
                    backgroundColor: [
                        'rgba(30, 130, 76, 1)',
                    ],
                    borderColor: [
                        'rgba(30, 130, 76, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label:data.nm_fair_count +   ' Fair',
                    data: [data.fairNM],
                    backgroundColor: [
                        'rgba(247, 202, 24, 1)',
                    ],
                    borderColor: [
                        'rgba(247, 202, 24, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label: data.nm_poor_count + ' Poor',
                    data: [data.poorNM],
                    backgroundColor: [
                        'rgba(242, 38, 19, 1)',
                    ],
                    borderColor: [
                        'rgba(242, 38, 19, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label: data.nm_no_data_count+' No Data',
                    data: [data.noDataNM],
                    backgroundColor: [
                        'rgba(149, 165, 166, 1)',
                    ],
                    borderColor: [
                        'rgba(149, 165, 166, 1)',

                    ],
                    borderWidth: 1
                }]
        },
        options: {
            responsive: true,
            legend: {
                labels: {
                    fontSize: 14,
                    boxWidth: 16
                }
            },
            title: {
                display: true,
                text: 'New Mexico (' + data.totNMBridges+ ' bridges)'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value) {
                            value = value / 100;
                            return value.toLocaleString('en-US', { style: 'percent' });
                        },
                    }
                }]
            }
        }
    });
}

