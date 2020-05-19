(function($){  
    projectFundingBus();
    projectFundingVehicles();
    projectFundingOperations();
    contactInformation();
})(jQuery);

function projectFundingBus(){
    row = [
        {
        "fundingCategories":"",
        "fedShare":"",
        "locShare":"",
        "locCont":"",
        "totalShare":"",
        "TDCAmount":""
        }
    ]
    $("#project-funding-bus").dxDataGrid({
        dataSource:row,
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: false,
        },
        columnAutoWidth:false,
        showBorders:true,
        wordWrapEnabled:true,
        columns:[
            {
                dataField:"fundingCategories",
                caption:"Capital (Refurnishing of Vehicles & Soft.)"
            },
            {
                dataField:"fedShare",
                caption:"Federal Share (Usually 80%)",
                format:"currency"
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
            },
            {
                dataField:"TDCAmount",
                caption:"TDC Amount Requested"
            }
        ],
        summary: {
            recalculateWhileEditing: true,
            totalItems: [{
                column:"fedShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            }, {
                column:"fundingCategories",
                displayFormat: "Total Funding By Share",
            }, {
                column:"locShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            },{
                column:"locCont",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            },{
                column:"totalShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "YOE Cost: {0}"
            },{
                column:"TDCAmount",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            }]
        }
    });
    $("#add-funding-bus").dxButton({  
        text: "Add Funding",  
        onClick: function () {  
            $('#project-funding-bus').dxDataGrid("instance").insertRow();  
        }  
    })  
}

function projectFundingVehicles(){
    row = [
        {
        "fundingCategories":"",
        "fedShare":"",
        "locShare":"",
        "locCont":"",
        "totalShare":"",
        "TDCAmount":""
        }
    ]
    $("#project-funding-vehicles").dxDataGrid({
        dataSource:row,
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: false,
        },
        columnAutoWidth:false,
        showBorders:true,
        wordWrapEnabled:true,
        columns:[
            {
                dataField:"fundingCategories",
                caption:"Capital (New Bus Purchase)"
            },
            {
                dataField:"fedShare",
                caption:"Federal Share (Usually 85%)"
            },
            {
                dataField:"locShare",
                caption:"Local Share (Usually 15%)"
            },
            {
                dataField:"locCont",
                caption:"Local Contribution Beyond Local Share"
            },
            {
                dataField:"totalShare",
                caption:"Total Share"
            },
            {
                dataField:"TDCAmount",
                caption:"TDC Amount Requested"
            }
        ],
        summary: {
            recalculateWhileEditing: true,
            totalItems: [{
                column:"fedShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            }, {
                column:"fundingCategories",
                displayFormat: "Total Funding By Share",
            }, {
                column:"locShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            },{
                column:"locCont",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            },{
                column:"totalShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "YOE Cost: {0}"
            },{
                column:"TDCAmount",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            }]
        }
    });
    $("#add-funding-vehicles").dxButton({  
        text: "Add Funding",  
        onClick: function () {  
            $('#project-funding-vehicles').dxDataGrid("instance").insertRow();  
        }  
    })  
}

function projectFundingOperations(){
    row = [
        {
        "fundingCategories":"",
        "fedShare":"",
        "locShare":"",
        "locCont":"",
        "totalShare":""
        }
    ]
    $("#project-funding-operations").dxDataGrid({
        dataSource:row,
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: false,
        },
        columnAutoWidth:false,
        showBorders:true,
        wordWrapEnabled:true,
        columns:[
            {
                dataField:"fundingCategories",
                caption:"Operations"
            },
            {
                dataField:"fedShare",
                caption:"Federal Share (Usually 50%)"
            },
            {
                dataField:"locShare",
                caption:"Local Share (Usually 50%)"
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
        summary: {
            recalculateWhileEditing: true,
            totalItems: [{
                column:"fedShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            }, {
                column:"fundingCategories",
                displayFormat: "Total Funding By Share",
            }, {
                column:"locShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            },{
                column:"locCont",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "{0}"
            },{
                column:"totalShare",
                summaryType:"sum",
                valueFormat:"currency",
                displayFormat: "YOE Cost: {0}"
            }]
        }
    });
    $("#add-funding-operations").dxButton({  
        text: "Add Funding",  
        onClick: function () {  
            $('#project-funding-operations').dxDataGrid("instance").insertRow();  
        }  
    })  
}

function contactInformation() {
    row = [
        {
            "Sponsor":""
        }
    ]
    $("#contact-information").dxDataGrid({
        dataSource:row,
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
                dataField:"Sponsor",
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