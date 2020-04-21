(function($){  
    configureProjectReadinessElementsTable("project-readiness-elements");
    transitOnly("transit-only");
    totalProjectCostForm();
    projectPhasesForm();
    projectFunding();
    contactInformation();
    projectReadinessElementsFooter();
})(jQuery);

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

function transitOnly(element){
    rows = [
        {
            "Element":"FTA Transfer process (if applicable)"
        },
        {
            "Element":"Active in FTA System"
        },
        {
            "Element":"Contract Executed for Bus Purchase"
        },
        {
            "Element":"Bus Delivery Date"
        },
        {
            "Element":"Other"
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
                dataField:"ResponsibleAgency",
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
        colCount:1,
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

// Project Funding Grid that I have been assigned to give function
function projectFunding(){
    row = [
        //  Left funding categories as String the rest of the columns as floats
        {   
        "fundingCategories":"*Fund Category 1", // Can be changed within page
        "fedShare":200.0,                       // Starts first and second row with values to show sum function
        "stateShare":100.0,                     
        "locShare":1200.0,
        "locCont":1110.0,
        "totalShare":0.0
        },
        {
        "fundingCategories":"*Fund Category 2", 
        "fedShare":400.0,
        "stateShare":1200.0,
        "locShare":200.0,
        "locCont":1000.0,
        "totalShare":0.0
        },
        {
        "fundingCategories":"*Fund Category 3",
        "fedShare":0.0,
        "stateShare":0.0,
        "locShare":0.0,
        "locCont":0.0,
        "totalShare":0.0
        }
    ]
    $("#project-funding").dxDataGrid({
        dataSource: row,                            
      
        editing: {
            mode: "cell",                       // Cell mode editing allows for realtime-editing without saving 
            allowUpdating: true,                
            allowDeleting: true,
            allowAdding: true,
            },       
        
        columnAutoWidth:true,                   
        
        wordWrapEnabled:true,
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
        summary: {                              // Summary for all the columns 
            recalculatingWhileEditing: true, 
            totalItems: [{
                column: "fedShare",
                summaryType: "sum",
                displayFormat: "{0} ",          // Instead of "Cost: $__ it's just the price with $"
                valueFormat: "currency"         // Formats sum to match real life use
            },{
                column: "stateShare",
                summaryType: "sum",
                displayFormat: "{0} ", 
                valueFormat: "currency",              

            },{
                column: "locShare",
                summaryType: "sum",
                displayFormat: "{0} ",
                valueFormat: "currency",

            },{
                column: "locCont",
                summaryType: "sum",
                displayFormat: "{0} ",
                valueFormat: "currency",

            },{
                column: "totalShare",
                summaryType: "sum",
                displayFormat: "{0} ",
                valueFormat: "currency",
            },{
            totalItems: [{                      // What was going to be my attempt for row summation
                // column:"fedShare",
                // alignByColumn,
                // summaryType: "sum",
                // displayFormat: "{0} ",
                // valueFormat: "currency",
                // showInColumb: "totalShare",
            }]                                  // In the end, mostly all functionality was achieved except for summation row-wise
        }]
    }
    });
    $("#add-funding").dxButton({  
        text: "Add a Row",  
        onClick: function () {  
            $('#project-funding').dxDataGrid("instance").insertRow();  
        }  
    })
}

function contactInformation(){
    rows = [
        {
            "Role":"Local PM"
        },
        {
            "Role":"State PM"
        },
        {
            "Role":"Sponsor"
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
                dataField:"Role",
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

function projectReadinessElementsFooter(){
    footerElems=[
        {
            "Have the above dates been reviewed by TXDOT or NMDOT":"",
            "Yes":"",
            "No":"",
            "N/A":"",
            "DateReviewed":"",
            "ReviewedBy":"",
            "Agency":"",
        }
    ]
    $("#project-readiness-elements-footer").dxForm({
        formData: footerElems,
        readOnly: false,
        labelLocation: "left",
        colCount: 4,
        items:[
            {
                dataField:"Yes",
                editorType: "dxCheckBox",
            },
            {
                dataField:"No",
                editorType: "dxCheckBox",
            },
            {
                dataField:"N/A",
                editorType: "dxCheckBox",
            },
            {
                dataField:"DateReviewed",
                editorType: "dxDateBox",
            },
            {
                dataField:"ReviewedBy",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
            {
                dataField:"Agency",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 40
                }
            },
        ]
    }).dxForm("instance").validate();
    
}