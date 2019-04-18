<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

if(empty($_GET['team_id'])){
    throw new Exception('you must submit a team id with your request');
}

$id = (int)$_GET['team_id'];

//need to join the team_id from the images table to the id from the teams table
//information wanted - team info? name, etc? or just the url?