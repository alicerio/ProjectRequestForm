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
        if ((type == "checkbox" || type == "radio") && this.checked) { 
            inputValues[$(this).attr("id")] = $(this).val();
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
    for(var key in form) { 
        if(form[key] == changes[key]) {
            continue;
        }
        else {
            logOfChanges.push("Change in: " + key)
        }
    }
    console.log(logOfChanges);
}