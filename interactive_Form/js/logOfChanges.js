(function($){  
    configureProjectReadinessElementsTable("project-readiness-elements");
})(jQuery);
//We initialize here with empty values
var dxgridvals = JSON.stringify($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());

//we initialize here since the first one has empty values
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
    checkForChangesInForm(inputValues);
    checkForChangesInDx(dxgridChanges);
    form = inputValues;
    dxgridvals = dxgridChanges;
}

/**
 * Function that checks for changes in a dx data grid, since it needs to stringify with JSON
 * @param {*} changes 
 */
function checkForChangesInDx(changes){
    currChanges = []
    //Will parse back objects for traversal
    dxgridvals = JSON.parse(dxgridvals);
    changes = JSON.parse(changes);

    for(var key in dxgridvals) {
        if(JSON.stringify(dxgridvals[key]) === JSON.stringify(changes[key])){
            continue;
        }
        else {
            currChanges.push("Change in: " + dxgridvals[key]['Element']);
        }
    }
    if(currChanges.length >= 1){
        logOfChanges.push(currChanges);
    }
    console.log(logOfChanges);
}


/**Function that checks for changes on the form values to determine if something changed*/
function checkForChangesInForm(changes){
    currChanges = []
    for(var key in form) {
        if(form[key] == changes[key]) {
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
                holder.innerHTML += "<p>"+$("label[for='" + change[c] + "']").text()+"</p>";
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
