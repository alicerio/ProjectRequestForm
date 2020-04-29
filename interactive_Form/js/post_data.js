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
        value:""
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

/**
 * Here we get from the project phases and type of projects which are form and a datagrid
 */
var project_phases = JSON.stringify($("#project-phases").dxForm("instance").getDataSource().items());
var type_project = JSON.stringify($("#type-project").dxDataGrid("instance").getDataSource().items());

/**
 * Here we get the inputs from the project cost footer
 */
var project_cost_footer=[
    {
        is_sponsor_paying_PE:"",
        is_sponsor_paying_row:"",
        is_decision_commited:"",
        percentages:""

    }
]
var  inputValues = []
    $("#project-cost-footer :input").map(function() {
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
project_cost_footer = inputValues;

/**
 * Here we get the info of the values pre project funding
 */
var pre_project_funding=[
    {
        requesting_mpo_funds:"",
        YOE_cost:""
    }
]
var  inputValues = []
    $("#pre-project-funding :input").map(function() {
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
    pre_project_funding = inputValues;

    /**
     * We get project funding values and contact information values
     */
var type_project = JSON.stringify($("#project-funding").dxDataGrid("instance").getDataSource().items());
var contact_info = JSON.stringify($("#contact-information").dxDataGrid("instance").getDataSource().items());
