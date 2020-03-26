(function($){  
    configureProjectReadinessElementsTable("project-readiness-elements");
    transitOnly("transit-only");
})(jQuery);

function configureProjectReadinessElementsTable(element){
    rows = [
        {
            "header":"Schematic"
        },
        {
            "header":"Env. Doc. Type"
        },
        {
            "header":"Environmental Doc"
        },
        {
            "header":"PS&E"
        },
        {
            "header":"ROW Map(s)"
        },
        {
            "header":"ROW Acquired"
        },
        {
            "header":"Utilities"
        },
        {
            "header":"Public Involvement"
        },
        {
            "header":"District Review"
        },
        {
            "header":"Agreement (LPFA)"
        },
        {
            "header":"Procurement Process"
        },
        {
            "header":"Let Date"
        },
        {
            "header":"Construction Performance End Date"
        },
        {
            "header":"PE Performance End Date"
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
        columns:[
            {
                dataField:"header"
            },
            {
                dataField:"EstStartDate",
                dataType:"datetime",
                validationRules: [{
                    type: "required",
                    message: "Estimated Start Date Required"
                }]
            },
            {
                dataField:"EstEndDate",
                dataType:"datetime",
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
    });


}

function transitOnly(element){
    rows = [
        {
            "header":"FTA Transfer process (if applicable)"
        },
        {
            "header":"Active in FTA System"
        },
        {
            "header":"Contract Executed for Bus Purchase"
        },
        {
            "header":"Bus Delivery Date"
        },
        {
            "header":"Other"
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
        columns:[
            {
                dataField:"header"
            },
            {
                dataField:"EstStartDate",
                dataType:"datetime",
                validationRules: [{
                    type: "required",
                    message: "Estimated Start Date Required"
                }]
            },
            {
                dataField:"EstEndDate",
                dataType:"datetime",
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
    });

}

function totalProjectCostForm(){
    
}
