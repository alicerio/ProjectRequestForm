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
    

    configTableProjects();

})(jQuery);

currentTest = 0;

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
        hoverStateEnabled: true,
        columns: [
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
                        // var newData = e["data"];
                        // delete newData.__KEY__;
                        // sendNewUser(newData);
                    });  
                }  
            }  
        },
        onEditingStart: function(e) {
            console.log("Editing Start");
            // var dataToRem = e["data"];
            // delete dataToRem.__KEY__;
            // removeUser(dataToRem);
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
            delete newData.__KEY__;
            sendNewUser(newData);
        },
        onRowUpdating: function(e) {
            console.log("Row Updating");
        },
        onRowUpdated: function(e) {
            console.log("Row Updated");
            //Here we insert new updated data into database
            // var newData = e["data"];
            // delete newData.__KEY__;
            // sendNewUser(newData);
        },
        onRowRemoving: function(e) {
            console.log("Row Removing");
        },
        onRowRemoved: function(e) {
            console.log("Row Removed");
            var dataToRem = e["data"];
            delete dataToRem.__KEY__;
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
    var values = setDataSourceProjects();
    var employees = values[1];
    var status1 = values[0];
    var tasks = values[2];
    /*Table of projects  */
    $("#gridContainerProjects").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        showBorders: true,
        hoverStateEnabled: true,

            editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        }, 
        hoverStateEnabled: true,
        columns: [{
                dataField: "Project",
                caption: "Project",
        
            },
            {
                caption:"Agency",
                dataField:"Agency",
            },
            {
                caption:"First Name",
                dataField:"FirstName",
            },
            {   
                caption:"Last Name",
                dataField:"LastName",
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
        masterDetail: {
            enabled: true,
            
            template: function(container, options) { 
                var currentEmployeeData = options.data;

                $("<div>")
                    .addClass("master-detail-caption")
                    .text(currentEmployeeData.Project +  "'s Submissions:")
                    .appendTo(container);

                $("<div>")
                    .dxDataGrid({
                        columnAutoWidth: true,
                        showBorders: true,
                        hoverStateEnabled: true,
                        onCellClick: function(e) {
                            let holder = e.value;
                            console.log(holder);
                            console.log(e);
                            if(e.value === "Log of Changes") { // if log of changes is click
                                alert("displaying log");
                                window.open(
                                    '/MPO_Projects/requestForm_Brian/interactive_form/tester_form.html',
                                    '_blank' 
                                  );
                            }
                            if(e.columnIndex === 2) { // if pdf icon is click
                              //store data of object clicked
                               localStorage.setItem("indexClicked", JSON.stringify(e.data));

                               window.document.location = "/MPO_Projects/requestForm_Brian/interactive_form/tester_form.html";
                                /*window.open(
                                    '/MPO_Projects/requestForm_Brian/interactive_form/tester_form.html',
                                    '_blank' // <- This is what makes it open in a new window.
                                  );*/
                            }
                        },
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
                                dataField: "DueDate",
                                dataType: "date"
                            },                           
                            {
                                caption:"Document",
                                dataField: "document",
                               // width: 100,
                                allowFiltering: false,
                                allowSorting: false,
                                cellTemplate: function (container, options) {
                                    $("<div>")
                                        .append($("<img>", { "src": "../img/pdf.png" })) 
                                        .appendTo(container);
                                }
                            }                              

                        ],
                        dataSource: new DevExpress.data.DataSource({
                            store: new DevExpress.data.ArrayStore({
                                key: "ID",
                                data: tasks
                            }),
                            filter: ["EmployeeID", "=", options.key]
                        })
                    }).appendTo(container);
            }
        }
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
    var employees = [{
        "ID": 1,
        "Project": "Transit Route",
        "Agency":"City of El Paso",
        "FirstName": "John",
        "LastName": "Heart",
        "statusID": 1
    },
    {
        "ID": 2,
        "Project": "Bikeway",
        "Agency": "SunMetro",
        "FirstName": "Olivia",
        "LastName": "Peyton",
        "statusID": 2
    },
    {
        "ID": 3,
        "Project": "Roundabout",
        "Agency":"SCRTD",
        "FirstName": "Robert",
        "LastName": "Reagan",
        "statusID": 3
    },
    {
        "ID": 4,
        "Project": "Intersection Improvements",
        "Agency":"TxDOT",
        "FirstName": "Greta",
        "LastName": "Sims",
        "statusID": 4
    },
    {
        "ID": 5,
        "Project": "Roadyway Maintenance",
        "Agency": "City of Horizon",
        "FirstName": "Brett",
        "LastName": "Wade",
        "statusID": 5
    },
    {
        "ID": 6,
        "Project": "Bridge Construction",
        "Agency": "City of Socorro",
        "FirstName": "Brett",
        "LastName": "Peterson",
        "statusID": 6
    },
    {
        "ID": 7,
        "Project": "Transit Operation",
        "Agency": "El Paso County",
        "FirstName": "Jorge",
        "LastName": "Peterson",
        "statusID": 7
    }];

    var tasks = [
    {
        "ID": 2, 
        "Subject": "Submission v1",
        "StartDate": "2013/01/01",
        "DueDate": "2013/01/31",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        "EmployeeID": 5
    },
    {
        "ID": 11,
        "Subject": "Corrections on v1",
        "StartDate": "2013/02/20",
        "DueDate": "2013/02/28",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        "EmployeeID": 5
    },
    {
        "ID": 20,
        "Subject": "Submission v1",
        "StartDate": "2013/03/02",
        "DueDate": "2013/03/12",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 4
    },
    {
        "ID": 20,
        "Subject": "Submission v1",
        "StartDate": "2013/03/02",
        "DueDate": "2013/03/12",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 6
    },
    {
        "ID": 24,
        "Subject": "Corrections on v1",
        "StartDate": "2013/03/16",
        "DueDate": "2013/03/26",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90,
        "EmployeeID": 6
    },
    {
        "ID": 41,
        "Subject": "Submission v2",
        "StartDate": "2013/03/28",
        "DueDate": "2013/04/07",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 6
    },
    {
        "ID": 138,
        "Subject": "Corrections on v2",
        "StartDate": "2014/03/20",
        "DueDate": "2014/03/25",
        "Status": "In Progress",
        "Priority": "Normal",
        "Completion": 40,
        "EmployeeID": 6
    },
    {
        "ID": 145,
        "Subject": "Log of Changes",
        "StartDate": "2014/03/26",
        "DueDate": "2014/03/27",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 25,
        "EmployeeID": 6
    },
    {
        "ID": 20,
        "Subject": "Submission v1",
        "StartDate": "2013/03/02",
        "DueDate": "2013/03/12",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 7
    },
    {
        "ID": 24,
        "Subject": "Corrections on v1",
        "StartDate": "2013/03/16",
        "DueDate": "2013/03/26",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90,
        "EmployeeID": 7
    },
    {
        "ID": 41,
        "Subject": "Submission v2",
        "StartDate": "2013/03/28",
        "DueDate": "2013/04/07",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 7
    }];

    return [status1,employees,tasks];
}