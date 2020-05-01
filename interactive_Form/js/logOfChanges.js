(function($){  
    configureProjectReadinessElementsTable("project-readiness-elements");
})(jQuery);
//We initialize here with empty values
var dxgridvals_old = JSON.stringify($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());
var dxgridvals_new = JSON.stringify($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());

//we initialize here since the first one has empty values
/**
 * Our object will contain two copies of the same, the first one will be the old values, and the second one the most recent values
 * that way we can know what were the changes made to the object
 */
var form = [
    {
        quantity: "",
        net_year: "",
        on_state_sys: "",
        off_state_sys: "",
        capacity_project: "",
        numExistingLanes: "",
        numProjectedLanes: "",
        miles: ""
    },
    {
        quantity: "",
        net_year: "",
        on_state_sys: "",
        off_state_sys: "",
        capacity_project: "",
        numExistingLanes: "",
        numProjectedLanes: "",
        miles: ""
    }
]

var logOfChanges = []

function getAllValues() {
    var  inputValues = []
    $("#formTest :input").map(function() {
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

    
    var dxgridChanges = JSON.stringify($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());

    //We shift the previously most recent changes to old
    form[0] = form[1];
    //We make new changes the most recent in our object
    form[1] = inputValues;
    //Same with the data grid
    dxgridvals_old = dxgridvals_new;
    dxgridvals_new = dxgridChanges;
    //Now we do the comparisons and add them to the log of changes
    checkForChangesInForm();
    checkForChangesInDx();
}

/**
 * Function that checks for changes in a dx data grid, since it needs to stringify with JSON
 * 
 */
function checkForChangesInDx(){
    currChanges = []
    //Will parse back objects for traversal
    dxgridvals_new = JSON.parse(dxgridvals_new);

    for(var key in dxgridvals_old) {
        if(JSON.stringify(dxgridvals_old[key]) === JSON.stringify(dxgridvals_new[key])){
            continue;
        }
        else {
            currChanges.push(key);
        }
    }
    if(currChanges.length >= 1){
        logOfChanges.push(currChanges);
    }
    console.log(logOfChanges);
}


/**Function that checks for changes on the form values to determine if something changed*/
function checkForChangesInForm(){
    currChanges = []
    for(var key in form[0]) {
        if(form[0][key] == form[1][key]) {
            continue;
        }
        else {
            currChanges.push(key);
        }
    }
    if(currChanges.length >= 1){
        logOfChanges.push(currChanges);
    }
        
    console.log(logOfChanges);
}

/**
 * This function will open a new tab and show the log of changes in ascending time order.
 */
function seeLog(){
    var logWindow = window.open('http://127.0.0.1:5500/interactive_Form/log.html', '_blank');
    logWindow.onload = function() {
        var holder = logWindow.document.getElementById("holder");

        // Create a list item for each change
        // and append it to the list
        logOfChanges.forEach(function (change) {
            for(var c in change){
                if($("label[for='" + change[c] + "']").text() ==""){
                    //Here is a dxdata element
                    holder.innerHTML += "<p> "+ dxgridvals_old[c]['Element'] +" Old Value: "+ dxgridvals_old[c]+ "| New Value: "+ dxgridvals_new[c] +"</p>";
                }
                else{
                    holder.innerHTML += "<p>"+$("label[for='" + change[c] + "']").text()+" Old Value: "+ form[0][change[c]] + "| New value: " + form[1][change[c]] +"</p>";
                }
                    
            }
            
        });
    }

}

/**
 * Method that initialized the dx data grid
 * @param {*} element 
 */

function configureProjectReadinessElementsTable(element){
    rows = [
        {
            "Element":"Schematic"
        },
        {
            "Element":"Env. Doc. Type"
        },
        {
            "Element":"Environmental Doc"
        },
        {
            "Element":"PS&E"
        },
        {
            "Element":"ROW Map(s)"
        },
        {
            "Element":"ROW Acquired"
        },
        {
            "Element":"Utilities"
        },
        {
            "Element":"Public Involvement"
        },
        {
            "Element":"District Review"
        },
        {
            "Element":"Agreement (LPFA)"
        },
        {
            "Element":"Procurement Process"
        },
        {
            "Element":"Let Date"
        },
        {
            "Element":"Construction Performance End Date"
        },
        {
            "Element":"PE Performance End Date"
        }
    ]

    progressValues = [
        "0%",
        "30%",
        "60%",
        "90%",
        "100%",
        "N/A"
    ]

    agencies=[
        "TxDOT",
        "Local",
        "Other"
    ]
    $("#"+element).dxDataGrid({
        dataSource:rows,
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: false,
            allowAdding: false
        },
        columnAutoWidth:true,
        showBorders:true,
        columns:[
            {
                dataField:"Element",
                allowEditing:false
            },
            {
                dataField:"EstStartDate",
                dataType:"date",
                validationRules: [{
                    type: "required",
                    message: "Estimated Start Date Required"
                }]
            },
            {
                dataField:"EstEndDate",
                dataType:"date",
                validationRules: [{
                    type: "required",
                    message: "Estimated End Date Required"
                }]
            },
            {
                dataField:"Progress",
                lookup:{
                    dataSource:progressValues
                }
            },
            {
                dataField:"RespAgency",
                lookup:{
                    dataSource:agencies
                }
            },
            {
                dataField:"Comments",
            }
        ],
        onEditorPreparing: function(e) {
            if((e['row']['data']['Element']==="Let Date"
            ||  e['row']['data']['Element']==="Construction Performance End Date"
            ||  e['row']['data']['Element']==="PE Performance End Date") 
            && (e['dataField']==="Progress" 
                || e['dataField']==="RespAgency" 
                || e['dataField']==="Comments")){
                e.editorOptions.readOnly = true;
            }

            // e['dataField'] = "Progress";
            // e.editorOptions.readOnly = true;
            // e['dataField'] = "RespAgency";
            // e.editorOptions.readOnly = true;
            // e['dataField'] = "Progress";
            // e.editorOptions.readOnly = true;
        }
    });

}
