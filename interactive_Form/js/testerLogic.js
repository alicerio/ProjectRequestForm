/*
console.log("The other side");
//console.log(localStorage.getItem("indexClicked"));
let dataH = JSON.parse(localStorage.getItem("indexClicked"));
console.dir(dataH);
*/

//We initialize here with empty values
//var dxgridvals = JSON.stringify($("CMAQ_Analysis_Form").dxDataGrid("instance").getDataSource().items());

function getAllValues(divId) {
    var  inputValues = []
    $(divId + " :input").map(function() {
        var type = $(this).prop("type");
        // checked radios/checkboxes
        if ((type == "checkbox" || type == "radio")) { 
            inputValues[$(this).attr("id")] = $(this).is(':checked');
        }
        else if (type == "select-one") { // recurses the options of select one
           var sel = document.getElementById($(this).attr("id")); 
           var opt;
            for ( var i = 0, len = sel.options.length; i < len; i++ ) {
                opt = sel.options[i];
                if ( opt.selected === true ) {
                    break;
                }
            }
           inputValues[$(this).attr("id")] = opt.text;
        }
        // all other fields, except buttons
        else if (type != "button" && type != "submit") {
            inputValues[$(this).attr("id")] = $(this).val();
        }
      
    })
    console.log(inputValues);
}

function getAllDx(){
    //var cmaq = JSON.stringify($("#CMAQ_Analysis_Form").dxDataGrid("instance").getDataSource().items());
    //var taf = JSON.stringify($("#transit_Analysis_Form").dxDataGrid("instance").getDataSource().items());
    //var taf_r = JSON.stringify($("#transit_Analysis_Form").dxDataGrid("instance").getDataSource().items());
    //
    //

    console.log(cmaq);
    console.log(taf);
    console.log(taf_r);
}