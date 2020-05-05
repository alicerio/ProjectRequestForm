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
        dataSource:project_readiness_elements_values,//rows,
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
        dataSource:transit_only_values,//rows,
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
    /*
     * Table divided into two columns (Funding Category and Amount).
     * Adds up the Total Cost of the project and the subtotal of 
     * the construction part only.
     * The subtotal sum corresponds to items from ID's [1,5]
    */
    costs = [
        {
            "fundingCategory":"Non-Construction Project",
            "amount":0,
            "ID": 1                       // Idetifier that determines if the sumation should go to the subtoal.
        },
        {
            "fundingCategory":"Construction",
            "amount":0,
            "ID": 2
        },
        {
            "fundingCategory":"Construction Engineering (CE)",
            "amount":0,
            "ID": 3
        },
        {
            "fundingCategory":"Contingencies",
            "amount":0,
            "ID": 4
        },
        {  
            "fundingCategory":"Potential Change Order",
            "amount":0,
            "ID": 5
        },
        {
            "fundingCategory":"Preliminary Engineering",
            "amount":0,
            "ID": 6
        },
        {
            "fundingCategory":"Indirects",
            "amount":0,
            "ID": 7
        },
        {
            "fundingCategory":"Right-Of-Way",
            "amount":0,
            "ID": 8
        },
        {
            "fundingCategory":"FTA Transfer",
            "amount":0,
            "ID": 9
        }
    ]
    $("#type-project").dxDataGrid({
        dataSource:type_project_values,//costs,
        keyExpr: "ID",                                      // Assigns identifier to each row.
        showBorders: true,
        editing: {                                          
            mode: "batch",
            allowUpdating: true,                       
        },
        columnAutoWidth:true,
        showBorders:true,
        columns:[
            {
                dataField:"fundingCategory",
                allowEditing:false                   
            },
            {
                dataField:"amount",
                format: "currency",
                editorOptions: {
                    format: "currency"                      // Converts each input to currency format "$0.00".
                }
            }
        ],
        selectedRowKeys: [1,2,3,4,5],                       // Rows that add to the subtotal field.
        summary: {
            recalculateWhileEditing: true,    
            totalItems: [{
                name: "SelectedRowsSummary",
                showInColumn: "amount",
                displayFormat: "Construction Subtotal: {0}",
                valueFormat: "currency",
                summaryType: "custom"
            },
            {
                column: "amount",
                summaryType: "sum",
                showInColumn: "amount",
                valueFormat: "currency",
                displayFormat: "Total Project Cost {0}"
            }
        ],
        calculateCustomSummary: function (options) {
            /*
             * Function that makes possible the adition of only certain rows.
             * Adds the subtotal category.
            */
            if (options.name === "SelectedRowsSummary") {
                if (options.summaryProcess === "start") {
                    options.totalValue = 0;
                }
                if (options.summaryProcess === "calculate") {
                    if (options.component.isRowSelected(options.value.ID)) {
                        options.totalValue = options.totalValue + options.value.amount;
                    }
                }
            }
        }
        }
    });
}

function projectPhasesForm(){
    /*
     * Eliminated the first three elements in order to make them availabe as radio checkboxes.
    */
    phases=[
        {
            "PE":"",
            "E:Env":"",
            "E:Eng":"",
            "R":"",
            "R:Acq":"",
            "R:Utl":""
        }
    ]

    $("#project-phases").dxForm({
        /*
         * Changed the order of the checkboxes to make them appear the
         * way they are on the electronic form.
        */
        formData: project_phases_values,//phases,
        readOnly: false,
        labelLocation: "left",
        colCount: 2,
        items:[
            {
                dataField:"PE",
                editorType: "dxCheckBox",
            },
            {
                dataField:"R",
                editorType: "dxCheckBox",
            },
            {
                dataField:"E:Env",
                editorType: "dxCheckBox",
            },
            {
                dataField:"R:Acq",
                editorType: "dxCheckBox",
            },
            {
                dataField:"E:Eng",
                editorType: "dxCheckBox",
            },
            {
                dataField:"R:Utl",
                editorType: "dxCheckBox",
            },
        ]
    }).dxForm("instance").validate();
}

// Project Funding Grid with addition functionalty for column
function projectFunding(){
    row = [
        //  Left funding categories as String the rest of the columns as floats
        {   
        "fundingCategories":"", // Can be changed within page
        "fedShare":0.0,                       // Starts first and second row with values to show sum function
        "stateShare":0.0,                     
        "locShare":0.0,
        "locCont":0.0,
        "totalShare":0.0
        }
    ]
    $("#project-funding").dxDataGrid({
        dataSource:project_funding_values,// row,                            
      
        editing: {
            mode: "cell",                       // Cell mode editing allows for realtime-editing without saving 
            allowUpdating: true,                
            allowDeleting: true,
            allowAdding: false,
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
        dataSource:contact_info_values,//rows,
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
        formData: project_readiness_elements_footer_values,//footerElems,
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