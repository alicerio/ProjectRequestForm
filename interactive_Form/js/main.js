(function($){  
    configureProjectReadinessElementsTable("project-readiness-elements");
    transitOnly("transit-only");
    totalProjectCostForm();
    projectPhasesForm();
    projectFunding();
    contactInformation();
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
        showBorders:true,
        columns:[
            {
                dataField:"header",
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
        showBorders:true,
        columns:[
            {
                dataField:"header",
                allowEditing:false,
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
        colCount: 2,
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

function projectPhasesForm(){
    phases=[
        {
            "FTA Transfer Requested":"",
            "C":"",
            "Non C":"",
            "PE":"",
            "E:Env":"",
            "E:Eng":"",
            "R":"",
            "R:Acq":"",
            "R:Utl":""
        }
    ]

    $("#project-phases").dxForm({
        formData: phases,
        readOnly: false,
        labelLocation: "left",
        colCount: 2,
        items:[
            {
                dataField:"FTA Transfer Requested",
                editorType: "dxCheckBox",

            },
            {
                dataField:"C",
                editorType: "dxCheckBox",

            },
            {
                dataField:"Non C",
                editorType: "dxCheckBox",

            },
            {
                dataField:"PE",
                editorType: "dxCheckBox",

            },
            {
                dataField:"E:Env",
                editorType: "dxCheckBox",

            },
            {
                dataField:"E:Eng",
                editorType: "dxCheckBox",

            },
            {
                dataField:"R",
                editorType: "dxCheckBox",

            },
            {
                dataField:"R:Acq",
                editorType: "dxCheckBox",

            },
            {
                dataField:"R:Utl",
                editorType: "dxCheckBox",

            },
        ]
    }).dxForm("instance").validate();
}

function projectFunding(){
    row = [
        {
        "fundingCategories":"Total Funding By Share",
        "fedShare":"0.0",
        "stateShare":"0.0",
        "locShare":"0.0",
        "locCont":"0.0",
        "totalShare":"0.0"
        }
    ]
    $("#project-funding").dxDataGrid({
        dataSource:row,
        editing: {
            mode: "row",
            allowUpdating: false,
            allowDeleting: true,
            allowAdding: true
        },
        columnAutoWidth:false,
        showBorders:true,
        columns:[
            {
                dataField:"fundingCategories",
                caption:"Funding Category"
            },
            {
                dataField:"fedShare",
                caption:"Federal Share (Usually 80%)"
            },
            {
                dataField:"stateShare",
                caption:"State Share"
            },
            {
                dataField:"locShare",
                caption:"Local Share (Usually 20%)"
            },
            {
                dataField:"locCont",
                caption:"Local Contribution Beyond Local Share"
            },
            {
                dataField:"totalShare",
                caption:"Total Share"
            }
        ],
    });

}

function contactInformation(){
    rows = [
        {
            "header":"Local PM"
        },
        {
            "header":"State PM"
        },
        {
            "header":"Sponsor"
        }
    ]
    $("#contact-information").dxDataGrid({
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
                dataField:"header",
                allowEditing:false
            },
            {
                dataField:"name",
                caption:"Name"
            },
            {
                dataField:"phone",
                caption:"Phone Number",
                dataType:"number"
            },
            {
                dataField:"email",
                caption:"eMail"
            },
            {
                dataField:"agency",
                caption:"Agency"
            },
            {
                dataField:"title",
                caption:"Title"
            }
        ],
    });
    
    
}