/**
 * FIXME: Consider Using a Dictionary to which to push the changes, push changes that the current user does in the current session
 * Once the person is done with the editing we send the object as a string to the database and Store it there in a row
 * If the person wishes to see the log of changes, we get the table containing the objects from the database and we
 * print those changes.
 * 
 */



/**
 * Function that generates the log of changes by comparing newest data with the previous data (we will have two tables in the database
 * to represent the last two main changes).
 * 
 */
function generateLogOfChanges(){
    //Array representing the log of changes in general
    var logOfChanges = []

    //We will generate here the information to search on database, form id or 
    var input = []

    //FIXME: Add proper calls to php
    //We should modify the proper php to obtain the data from the form (both old and newest in one array)
    $.ajax({
        url: '',
        type: 'GET',
        data: {'input': input},
        success: function(data) {
            checkForChangesInForm(data,logOfChanges);
        },
        error: function(e) {
          //called when there is an error
          console.log(e.message);
        }
    });
    
}


/**Function that checks for changes on the form values to determine if something changed*/
function checkForChangesInForm(form,logOfChanges){
    currChanges = []
    for(var key in form[0]) {
        if(form[0][key] == form[1][key]) {
            continue;
        }
        else {
            currChanges.push(key);
        }
    }
    if(currChanges.length >= 1){
        logOfChanges.push(currChanges);
    }
    seeLog(logOfChanges)
}

/**
 * This function will open a new tab and show the log of changes in ascending time order.
 */
function seeLog(logOfChanges){
    var logWindow = window.open('http://127.0.0.1:5500/interactive_Form/log.html', '_blank');
    logWindow.onload = function() {
        var holder = logWindow.document.getElementById("holder");

        // Create a list item for each change
        // and append it to the list
        logOfChanges.forEach(function (change) {
            for(var c in change){
                if($("label[for='" + change[c] + "']").text() ==""){
                    //Here is a dxdata element
                    holder.innerHTML += "<p> "+ dxgridvals_old[c]['Element'] +" Old Value: "+ dxgridvals_old[c]+ "| New Value: "+ dxgridvals_new[c] +"</p>";
                }
                else{
                    holder.innerHTML += "<p>"+$("label[for='" + change[c] + "']").text()+" Old Value: "+ form[0][change[c]] + "| New value: " + form[1][change[c]] +"</p>";
                }
                    
            }
            
        });
    }

}
