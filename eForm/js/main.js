(function($){  
    configureProjectReadinessElementsTable("project-readiness-elements");
    transitOnly("transit-only");
    totalProjectCostForm();
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
            mode: "popup",
            allowUpdating: true,
            allowDeleting: false,
            allowAdding: false
        },
        columnAutoWidth:true,
        columns:[
            {
                dataField:"header",
                allowEditing:false
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
            mode: "popup",
            allowUpdating: true,
            allowDeleting: false,
            allowAdding: false
        },
        columnAutoWidth:true,
        columns:[
            {
                dataField:"header",
                allowEditing:false,
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
    costs=[
        {
            "Construction Subtotal":"",

            "Non-Construction Project":"",

            "Construction":"",

            "Construction Engineering (CE)":"",

            "Contingencies":"",

            "Potential Change Order":"",

            "Preliminary Engineering":"",

            "Indirects":"",

            "Right Off Way":"",

            "FTA Transfer":""
        }
        
    ]
    $("#yoe-form").dxForm({
        formData: costs,
        readOnly: false,
        labelLocation: "left",
        colCount: 1,
        items:[
            {
                dataField:"Construction Subtotal",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Non-Construction Project",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Construction",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Construction Engineering (CE)",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Contingencies",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Potential Change Order",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Preliminary Engineering",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Indirects",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Right Off Way",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"FTA Transfer",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            }
        ]
    }).dxForm("instance").validate();
    
}
