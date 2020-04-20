(function($){  
    configureProjectReadinessElementsTable("project-readiness-elements");
})(jQuery);

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
    console.log(inputValues);
    console.log($("#project-readiness-elements").dxDataGrid("instance").getDataSource().items());
    checkForChanges(inputValues);
    form = inputValues;
}

function checkForChanges(changes){
    currChanges = []
    for(var key in form) { 
        if(form[key] == changes[key]) {
            continue;
        }
        else {
            currChanges.push("Change in: " + key)
        }
    }
    if(currChanges.lenght == 1){
        logOfChanges.push(currChanges);
    }
        
    console.log(logOfChanges);
}

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
