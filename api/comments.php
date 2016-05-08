<?php
if(isset($_POST) && !empty($_POST)) {
    $file = file_get_contents('comments.json');
    $file = json_decode($file,true);
    $file[] = $_POST;
    $file = json_encode($file);
    file_put_contents('comments.json',$file);

    echo file_get_contents('comments.json');
} else {
    echo file_get_contents('comments.json');
}