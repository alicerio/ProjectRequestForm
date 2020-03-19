<?php
/*Helper function that prints message to console */
function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

/*Gets values posted by ajax call from the new account form */
function get_account_values(){
    $values = $_POST['input'];
    return $values;
}

/*Function that connects to the database, can modify user and password for quick connection*/
function connect_to_db(){
    $host = "ctis.utep.edu";
    $username = "ctis";
    $password = "19691963";
    $db = "project_request_form";
    // Create connection
    $conn = mysqli_connect($host, $username,$password, $db);

    // Check connection
    if ($conn->connect_error) {
        debug_to_console("Connection failed");
        die("Connection failed: " . $conn->connect_error);
    } 
    else{
        debug_to_console("Connected successfully");
    }
    return $conn;

}
$conn = connect_to_db();
/*Verifies if values have been posted and tries to get them */
if(isset($_POST['input'])){
    $account_to_delete = get_account_values();
    $email = $account_to_delete['email'];
    $query = "DELETE from users where email='".$email."'";
    mysqli_query($conn,$query);
/*Checks if insertion was succesful */
    if ($conn->query($sql) === TRUE) {
        debug_to_console("Record Deleted successfully");
    } else {
        debug_to_console("Failed to delete records");
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
else{
    debug_to_console("Values not posted");
}
?>