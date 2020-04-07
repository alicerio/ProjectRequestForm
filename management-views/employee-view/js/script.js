(function($){ 
    /**This gets the user information from the SESSION variable as an array. */   
    $.ajax({
        url:'..\\php\\getUserType.php',
        type:'GET',
        dataType:'json',
        success: function(data){
            //Send the user type to the table to provide proper permissions. The type of user is last element in array.
            //configTableProjects(data[data.length-1]);
            const div = document.querySelector('.dropdown-menu');
            div.innerHTML += `<a class="dropdown-item" href="#">Type: ${data[data.length-1]}</a>`;
            div.innerHTML += `<a class="dropdown-item" href="../../../requestForm_Victor/sign-in/index.html">Sign Out</a>`;
            const drop = document.querySelector('#userProfile');
            drop.innerHTML += `<svg class="bi bi-person" width="1.5em" height="1.5em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M15 16s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002zM5.022 15h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C13.516 12.68 12.289 12 10 12c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002zM10 9a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
        ${data[0]}
        <span class="caret"></span>`
        },
        error: function(e){
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
            allowAdding: false
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