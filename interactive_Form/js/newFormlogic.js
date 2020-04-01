
function saveProjectTitle(){
    alert("Here");

    var tempEmployee = generateTempEmployee(project_name);
    console.log(employees);
    appendEmployee(tempEmployee);
}

function generateTempEmployee(p){
    var tempEmployee = {
        "ID": 1,
        "Project": p,
        "FirstName": "Brian", // get current user 
        "LastName": "Cardiel", // get current user last name
        "Position": "CEO", 
        "State": "Texas",
        "statusID": 1
    }
    return tempEmployee;
}

function appendEmployee(tempEmployee){
  
}
//tester_form.html
function checkProjectName(){
    var project_name = document.getElementById("project_name").value; // gets project name
    // recurse db project names only
    for(index in employees){
        if(employees[index].Project == project_name){
            alert("Project Already exists with name " + project_name);
            return false;
        }else{
            return true;
        }
    }
}
employees = [{
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
