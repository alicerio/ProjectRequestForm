
function getValues(){
    getAllValues("#project-phases-radios");
    getAllValues("#project-cost-footer");
    getAllValues("#pre-project-funding");
    getAllValues("#page1");
    getAllValues("#page2");
}


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
    var cmaq = JSON.stringify($("#CMAQ_Analysis_Form").dxDataGrid("instance").getDataSource().items());
    var taf = JSON.stringify($("#transit_Analysis_Form").dxDataGrid("instance").getDataSource().items());
    var taf_r = JSON.stringify($("#transit_Analysis_Form").dxDataGrid("instance").getDataSource().items());
        
    /**
     * We will extract the data from the multiple sources such as data grids and forms.
     */
    var project_readiness_elements = JSON.stringify($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());
    var transit_only = JSON.stringify($("#transit-only").dxDataGrid("instance").getDataSource().items());
    var project_readiness_elements_footer = JSON.stringify($("#project-readiness-elements-footer").dxForm("instance").getDataSource().items());


    /**
     * Here we get from the project phases and type of projects which are form and a datagrid
     */
    var project_phases = JSON.stringify($("#project-phases").dxForm("instance").getDataSource().items());
    var type_project = JSON.stringify($("#type-project").dxDataGrid("instance").getDataSource().items());


    /**
     * We get project funding values and contact information values
     */
    var type_project = JSON.stringify($("#project-funding").dxDataGrid("instance").getDataSource().items());
    var contact_info = JSON.stringify($("#contact-information").dxDataGrid("instance").getDataSource().items());


    

    console.log(cmaq);
    console.log(taf);
    console.log(taf_r);
}