(function($){ 
    /**This gets the user information from the SESSION variable as an array. */   
    $.ajax({
        url:'..\\php\\getUserType.php',
        type:'GET',
        dataType:'json',
        success: function(data){
            //Send the user type to the table to provide proper permissions. The type of user is last element in array.
            //configTableProjects(data[data.length-1]);
        }  
    });
        
    $.ajax({
        url: '../php/retrieveProjects.php',
        type: 'GET',
        dataType:'json',
        success: function(data) {
            /**Create data grid from data provided */
            $("#gridContainerProjects").dxDataGrid({
                dataSource: data,
            });
            configTableProjects();
        },
        error: function(e) {
            //called when there is an error
            console.log(e.message);
        }
    });
    setDataSourceProjects();

})(jQuery);


/**Function that configures the Projects table */
function configTableProjects(){
    /**Data for the Project Table */
    var status1 = [{
        "Status": "In progress",
        "ID":1
    },
    {
        "Status": "Pending PM Review",
        "ID":2
    },
    {
        "Status": "PM Signed",
        "ID":3
    },
    {
        "Status": "Submitted V1",
        "ID":4
    },
    {
        "Status": "MPO Returned",
        "ID":5 
    },
    {
        "Status":"Submitted V2",
        "ID":7
    },    
    {
        "Status": "MPO Approved",
        "ID":6
    }];
    /*Table of projects  */
    $("#gridContainerProjects").dxDataGrid({
        keyExpr: "ID",
        showBorders: true,
            editing: {
            mode: "row",
            allowUpdating: false,
            allowDeleting: false,
            allowAdding: true
        }, 
        columns: [{
                dataField: "project",
                caption: "Project",
        
            },
            {
                caption:"Agency",
                dataField:"agency",
            },
            {
                caption:"First Name",
                dataField:"first_name",
            },
            {   
                caption:"Last Name",
                dataField:"last_name",
            },
            {
                caption:"Status",
                dataField:"statusID",
                lookup: {
                    dataSource: status1,
                    displayExpr: "Status",
                    valueExpr: "ID"
                }
            }
        ],
    });

}

function setDataSourceProjects(){
    $.ajax({
        url: '../php/retrieveSubmissions.php',
        type: 'GET',
        dataType:'json',
        success: function(data) {
            /**Create data grid from data provided */
            $("#gridContainerProjects").dxDataGrid({
                masterDetail: {
                    enabled: true,
                    template: function(container, options) { 
                        var currentEmployeeData = options.data;
        
                        $("<div>")
                            .addClass("master-detail-caption")
                            .text(currentEmployeeData.project +  "'s Submissions:")
                            .appendTo(container);
                        $("<div>")
                            .dxDataGrid({
                                columnAutoWidth: true,
                                showBorders: true,
                                    editing: {
                                    mode: "row",
                                    allowUpdating: false,
                                    allowDeleting: false
                                    }, 
                                columns: [
                                    {
                                    caption:"Title",
                                    dataType:"String",
                                    dataField:"Subject",
                                    // editorType: "dxTextArea",
                                    colSpan: 2,
                                    },
                                    {
                                        caption:"Submitted",
                                        dataField: "submittedDate",
                                        dataType: "date"
                                    },                           
                                    {
                                        caption:"Document",
                                        dataField: "document",
                                        allowFiltering: false,
                                        allowSorting: false,
                                        cellTemplate: function (container, options) {
                                            $("<div>")
                                                .append($("<img>", { "src": "../img/pdf.png" })) 
                                                .appendTo(container);
                                        }
                                    }],
                                dataSource: new DevExpress.data.DataSource({
                                    store: new DevExpress.data.ArrayStore({
                                        key: "ID",
                                        data: data
                                    }),
                                    filter: ["EmployeeID", "=", options.key]
                                })
                            }).appendTo(container);
                    }
                }
            });
        },
        error: function(e) {
            //called when there is an error
            console.log(e.message);
        }
    });
}