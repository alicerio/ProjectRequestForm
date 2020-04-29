/**
 * We will extract the data from the multiple sources such as data grids and forms.
 */


var project_readiness_elements = JSON.stringify($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());
var transit_only = JSON.stringify($("#transit-only").dxDataGrid("instance").getDataSource().items());
var project_readiness_elements_footer = JSON.stringify($("#project-readiness-elements-footer").dxForm("instance").getDataSource().items());


/**
 * Here we extract the project phases checkboxes and put them into an object
 * 
 */
var project_phases_radios = [
    {
        "value":""
    }
]
var  inputValues = []
    $("#project-phases-radios :input").map(function() {
        var type = $(this).prop("type");

        // checked radios/checkboxes
        if ((type == "checkbox" || type == "radio")) { 
            inputValues[$(this).attr("id")] = $(this).is(':checked');
        }
        // all other fields, except buttons
        else if (type != "button" && type != "submit") {
            inputValues[$(this).attr("id")] = $(this).val();
        }
    })
project_phases_radios = inputValues;

var project_phases = JSON.stringify($("#project-phases").dxForm("instance").getDataSource().items());
var type_project = JSON.stringify($("#type-project").dxDataGrid("instance").getDataSource().items());