(function($){    
    $.ajax({
        url: './php/retrieveEmployees.php',
        type: 'GET',
        dataType:'json',
        success: function(data) {
            /**Create data grid from data provided */
            $("#gridContainerEmployees").dxDataGrid({
                dataSource: data,
            });
            configTableEmployees();
        },
        error: function(e) {
            //called when there is an error
            console.log(e.message);
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


/**
 * Function that opens tab in view
 * @param {*} evt 
 * @param {*} tabName 
 */
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


/**Function that provides the configuration for the employees table after it was populated*/
function configTableEmployees(){
    var accessLevels = [{
        "level": "Admin",
        "ID":1
        }, {
        "level": "Submitter",
        "ID":2
        },{
        "level": "Creator",
        "ID":3
    }];

    /*Table container configuration*/
    $("#gridContainerEmployees").dxDataGrid({
        keyExp:"ID",
        showBorders: true,
        paging: {
            pageSize: 10
        },
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        }, 
        columns: [
            {
                caption:"ID",
                dataField:"__KEY__",
                visible:false,
            },
            {
                caption: "Agency",
                dataField: "agency"
            },
            {
                caption:"First Name",
                dataField: "first_name",
            },
            {
                caption:"Last Name",
                dataField: "last_name",
            }, 
            {
                caption:"Email",
                dataField: "email",
            },
            {
                caption: "Access Level",
                dataField: "type_of_user",
                lookup: {
                    dataSource: accessLevels,
                    displayExpr: "level",
                    valueExpr: "ID"
                }
            }, 
            {
                caption: "Password",
                dataField: "pass"
            },     
        ],
        onCellPrepared: function(e) {  
            if(e.rowType === "data" && e.column.command === "edit") {  
                var isEditing = e.row.isEditing,  
                    $links = e.cellElement.find(".dx-link");  
                if(isEditing){ 
                    $links.filter(".dx-link-cancel").on("click", function(args) {  
                        var newData = e["data"];
                        sendUpdatedUser(newData);
                    });  
                }  
            }  
        },
        onEditingStart: function(e) {
            console.log("Editing Start");
            var dataToRem = e["data"];
            removeUser(dataToRem);
        },
        onInitNewRow: function(e) {
            console.log("Init Row");
        },
        onRowInserting: function(e) {
            console.log("Row Insert");
        },
        onRowInserted: function(e) {
            //Data is inserted succesfully
            var newData = e["data"];
            sendNewUser(newData);
        },
        onRowUpdating: function(e) {
            console.log("Row Updating");
        },
        onRowUpdated: function(e) {
            console.log("Row Updated");
            //Here we insert new updated data into database depending on if the password changed
            var newData = e["data"];
            if(newData.pass.length<25){
                //Password was changed and we insert as new
                sendNewUser(newData);
            }else{
                //Password did not change so we insert without hashing.
                sendUpdatedUser(newData);
            }
            
        },
        onRowRemoving: function(e) {
            console.log("Row Removing");
        },
        onRowRemoved: function(e) {
            console.log("Row Removed");
            var dataToRem = e["data"];
            removeUser(dataToRem);
        }
    });

    $("#clear").dxButton({
        text: "Clear",
        onClick: function() {
            $("#events ul").empty();
        }
    });
    
}

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

/**Function that sends new user information to PHP for DB*/
function sendNewUser(input){
    // [Send New Account data to PHP for DB Processing]
    console.log(input);
    $.ajax({
        url: '../../sign-in/php/newAccount.php',
        type: 'POST',
        data: {'input': input},
        success: function(data) {
            console.log(data);
        },
        error: function(e) {
          //called when there is an error
          console.log(e.message);
        }
    });
}

/**Function that sends user information to PHP for DB update without hashing since the password was not updated*/
function sendUpdatedUser(input){
    // [Send New Account data to PHP for DB Processing]
    console.log(input);
    $.ajax({
        url: 'php/updateAccount.php',
        type: 'POST',
        data: {'input': input},
        success: function(data) {
            console.log(data);
        },
        error: function(e) {
          //called when there is an error
          console.log(e.message);
        }
    });
}

/**Function that deletes the corresponding user from the database*/
function removeUser(input){
    //Send Data to be deleted
    $.ajax({
        url: 'php/deleteAccount.php',
        type: 'POST',
        data: {'input': input},
        success: function(data) {
            console.log(input);
        },
        error: function(e) {
          //called when there is an error
          console.log(e.message);
        }
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