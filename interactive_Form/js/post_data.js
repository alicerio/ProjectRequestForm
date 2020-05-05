
function getValues(){
    getAllValues("#project-phases-radios");
    getAllValues("#project-cost-footer");
    getAllValues("#pre-project-funding");
    getAllValues("#page1");
    getAllValues("#page2");
    getAllDx();
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
    var cmaq = JSON.stringify($("#CMAQ_Analysis_Form").dxForm("instance").option('formData'));
    var taf = JSON.stringify($("#transit_Analysis_Form").dxForm("instance").option('formData'));
    var taf_r = JSON.stringify($("#transit_Analysis_Form_Radio").dxForm("instance").option('formData'));;
        
    /**
     * We will extract the data from the multiple sources such as data grids and forms.
     */
    var project_readiness_elements = JSON.stringify($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());
    var transit_only = JSON.stringify($("#transit-only").dxDataGrid("instance").getDataSource().items());
    var project_readiness_elements_footer = JSON.stringify($("#project-readiness-elements-footer").dxForm("instance").option('formData'));


    /**
     * Here we get from the project phases and type of projects which are form and a datagrid
     */
    var project_phases = JSON.stringify($("#project-phases").dxForm("instance").option('formData'));
    var type_project = JSON.stringify($("#type-project").dxDataGrid("instance").getDataSource().items());


    /**
     * We get project funding values and contact information values
     */
    var project_funding = JSON.stringify($("#project-funding").dxDataGrid("instance").getDataSource().items());
    var contact_info = JSON.stringify($("#contact-information").dxDataGrid("instance").getDataSource().items());


    
    console.log(project_readiness_elements);
    console.log(transit_only);
    console.log(project_readiness_elements_footer);
    console.log(project_phases);
    console.log(type_project);
    console.log(contact_info);
    console.log(project_funding);
    console.log(cmaq);
    console.log(taf);
    console.log(taf_r);
}