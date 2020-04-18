var form = [
{
    quantity: "",
    net_year: "",
    on_state_sys: "",
    off_state_sys: "",
    capacity_project: "",
    numExistingLanes: "",
    numProjectedLanes: "",
    miles: ""
}
]

var logOfChanges = []

function getAllValues() {
    var  inputValues = []
    $("#formTest :input").map(function() {
        var type = $(this).prop("type");

        // checked radios/checkboxes
        if ((type == "checkbox" || type == "radio")) { 
            inputValues[$(this).attr("id")] = $(this).is(':checked');
        }
        // all other fields, except buttons
        else if (type != "button" && type != "submit") {
            inputValues[$(this).attr("id")] = $(this).val();
        }
    })
    console.log(inputValues);
    checkForChanges(inputValues);
    form = inputValues;
}

function checkForChanges(changes){
    currChanges = []
    for(var key in form) { 
        if(form[key] == changes[key]) {
            continue;
        }
        else {
            currChanges.push("Change in: " + key)
        }
    }
    logOfChanges.push(currChanges);
    console.log(logOfChanges);
}