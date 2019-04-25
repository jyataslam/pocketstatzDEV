<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$user_id = 1;

if(empty($_GET['team_id'])){
	throw new Exception('You must send a team_id with your request');
}

$team_id = $_GET['team_id'];
$user_id = $_GET['user_id'];

$query = "DELETE FROM `user_teams` AS u_t
    WHERE u_t.`user_id` = $user_id AND u_t.`team_id` = $team_id";

$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception(mysqli_error($conn));
}

if( mysqli_num_rows($result) === 0){
	throw new Exception("no team matches team id $team_id");
}

$output = [
	'success' => true
];

print( json_encode($output));
?>