<?php
    session_start();
    $type = $_SESSION['account'];
    //$type = $type[count($type)-2];
    //Processing of the array which has strings containing extra characters such as commas.
    $type = implode(",",$type);
    $type = explode(",,,",$type);
    //Replace the invalid characters in first element removing this -> [,
    $type[0] = str_replace("[,","",$type[0]);
    //Replace invalid characters in last element removing this -> ,]
    $type[count($type)-1] = str_replace(",]","",$type[count($type)-1]);
    echo json_encode($type);
?>