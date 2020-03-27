/**Function that configures the Projects table */

(function($){    
    // $.ajax({
    //     url: './php/retrieveEmployees.php',
    //     type: 'GET',
    //     dataType:'json',
    //     success: function(data) {
    //         /**Create data grid from data provided */
    //         $("#gridContainerEmployees").dxDataGrid({
    //             dataSource: data,
    //         });
    //         configTableEmployees();
    //     },
    //     error: function(e) {
    //         //called when there is an error
    //         console.log(e.message);
    //     }
    // });
    

    configTableProjects();

})(jQuery);
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
            editing: {
            mode: "row",
            allowUpdating: false,
            allowDeleting: false,
            allowAdding: false
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