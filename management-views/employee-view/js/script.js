(function($){ 
    /**This gets the user information from the SESSION variable as an array. */   
    $.ajax({
        url:'..\\php\\getUserType.php',
        type:'GET',
        dataType:'json',
        success: function(data){
            //Send the user type to the table to provide proper permissions. The type of user is last element in array.
            configTableProjects(data[data.length-1]);
        }  
    });


})(jQuery);


/**Function that configures the Projects table */
function configTableProjects(data){
    var access = (data.localeCompare("Submitter")==0?true:false);
    var values = setDataSourceProjects();
    var employees = values[1];
    var status1 = values[0];
    var tasks = values[2];
    /*Table of projects  */
    $("#gridContainerProjects").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        showBorders: true,
            editing: {
            mode: "row",
            allowUpdating: access,
            allowDeleting: access,
            allowAdding: access
        }, 
        columns: [{
                dataField: "Project",
                caption: "Project",
        
            },
            "Agency",
            "FirstName",
            "LastName",
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
                            editing: {
                            mode: "row",
                            allowUpdating: true,
                            allowDeleting: true
                            }, 
                        columns: [
                            {
                            caption:"Notes",
                            dataType:"String",
                            dataField:"Subject",
                            // editorType: "dxTextArea",
                            colSpan: 2,
                            },
                            {
                                caption:"Document",
                                dataField:"doc"
                            },
                            {
                                caption:"Submitted",
                                dataField: "DueDate",
                                dataType: "date"
                            }],
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
        "Status": "MPO Approved",
        "ID":6
    }];
    var employees = [{
        "ID": 1,
        "Project": "Alpha",
        "FirstName": "John",
        "LastName": "Heart",
        "Position": "CEO",
        "State": "California",
        "statusID": 1
    },
    {
        "ID": 2,
        "Project": "MPO 145",
        "FirstName": "Olivia",
        "LastName": "Peyton",
        "Position": "Sales Assistant",
        "State": "California",
        "statusID": 2
    },
    {
        "ID": 3,
        "Project": "TXDOT 162",
        "FirstName": "Robert",
        "LastName": "Reagan",
        "Position": "CMO",
        "State": "Arkansas",
        "statusID": 3
    },
    {
        "ID": 4,
        "Project": "NMSU",
        "FirstName": "Greta",
        "LastName": "Sims",
        "Position": "HR Manager",
        "State": "Georgia",
        "statusID": 4
    },
    {
        "ID": 5,
        "Project": "Delta",
        "FirstName": "Brett",
        "LastName": "Wade",
        "Position": "IT Manager",
        "State": "Idaho",
        "statusID": 5
    }];

    var tasks = [
    {
        "ID": 2, "Subject": "Prepare 3013 Marketing Plan",
        "StartDate": "2013/01/01",
        "DueDate": "2013/01/31",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        "EmployeeID": 5
    },
    {
        "ID": 3,
        "Subject": "Update Personnel Files",
        "StartDate": "2013/02/03",
        "DueDate": "2013/02/28",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        "EmployeeID": 2
    },
    {
        "ID": 4,
        "Subject": "Review Health Insurance Options Under the Affordable Care Act",
        "StartDate": "2013/02/12",
        "DueDate": "2013/04/25",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 50,
        "EmployeeID": 2
    },
    {
        "ID": 11,
        "Subject": "Rollout of New Website and Marketing Brochures",
        "StartDate": "2013/02/20",
        "DueDate": "2013/02/28",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        "EmployeeID": 5
    },
    {
        "ID": 15,
        "Subject": "Review 2012 Sales Report and Approve 2013 Plans",
        "StartDate": "2013/02/23",
        "DueDate": "2013/02/28",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 5
    },
    {
        "ID": 16,
        "Subject": "Deliver R&D Plans for 2013",
        "StartDate": "2013/03/01",
        "DueDate": "2013/03/10",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        "EmployeeID": 3
    },
    {
        "ID": 20,
        "Subject": "Approve Hiring of John Jeffers",
        "StartDate": "2013/03/02",
        "DueDate": "2013/03/12",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 4
    },
    {
        "ID": 20,
        "Subject": "Approve Hiring of John Jeffers",
        "StartDate": "2013/03/02",
        "DueDate": "2013/03/12",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 6
    },
    {
        "ID": 21,
        "Subject": "Non-Compete Agreements",
        "StartDate": "2013/03/12",
        "DueDate": "2013/03/14",
        "Status": "Completed",
        "Priority": "Low",
        "Completion": 100,
        "EmployeeID": 2
    },
    {
        "ID": 23,
        "Subject": "Update Employee Files with New NDA",
        "StartDate": "2013/03/16",
        "DueDate": "2013/03/26",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90,
        "EmployeeID": 4
    },
    {
        "ID": 24,
        "Subject": "Update Employee Files with New NDA",
        "StartDate": "2013/03/16",
        "DueDate": "2013/03/26",
        "Status": "Need Assistance",
        "Priority": "Normal",
        "Completion": 90,
        "EmployeeID": 6
    },
    {
        "ID": 40,
        "Subject": "Provide New Health Insurance Docs",
        "StartDate": "2013/03/28",
        "DueDate": "2013/04/07",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 4
    },
    {
        "ID": 41,
        "Subject": "Provide New Health Insurance Docs",
        "StartDate": "2013/03/28",
        "DueDate": "2013/04/07",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 6
    },
    {
        "ID": 50,
        "Subject": "Give Final Approval for Refunds",
        "StartDate": "2013/05/05",
        "DueDate": "2013/05/15",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 2
    },
    {
        "ID": 74,
        "Subject": "Decide on Mobile Devices to Use in the Field",
        "StartDate": "2013/07/30",
        "DueDate": "2013/08/02",
        "Status": "Completed",
        "Priority": "High",
        "Completion": 100,
        "EmployeeID": 3
    },
    {
        "ID": 78,
        "Subject": "Try New Touch-Enabled WinForms Apps",
        "StartDate": "2013/08/11",
        "DueDate": "2013/08/15",
        "Status": "Completed",
        "Priority": "Normal",
        "Completion": 100,
        "EmployeeID": 3
    },
    {
        "ID": 81,
        "Subject": "Review Site Up-Time Report",
        "StartDate": "2013/08/24",
        "DueDate": "2013/08/30",
        "Status": "Completed",
        "Priority": "Urgent",
        "Completion": 100,
        "EmployeeID": 5
    },
    {
        "ID": 117,
        "Subject": "Approval on Converting to New HDMI Specification",
        "StartDate": "2014/01/11",
        "DueDate": "2014/01/31",
        "Status": "Deferred",
        "Priority": "Normal",
        "Completion": 75,
        "EmployeeID": 3
    },
    {
        "ID": 138,
        "Subject": "Review HR Budget Company Wide",
        "StartDate": "2014/03/20",
        "DueDate": "2014/03/25",
        "Status": "In Progress",
        "Priority": "Normal",
        "Completion": 40,
        "EmployeeID": 6
    },
    {
        "ID": 145,
        "Subject": "Final Budget Review",
        "StartDate": "2014/03/26",
        "DueDate": "2014/03/27",
        "Status": "In Progress",
        "Priority": "High",
        "Completion": 25,
        "EmployeeID": 6
    }];

    return [status1,employees,tasks];
}