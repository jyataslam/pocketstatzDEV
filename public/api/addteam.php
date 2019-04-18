<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

//need to go back and make all of these dymanic
$user_id = 1;
$team_id = 1;

// if(empty($_GET['team_id'])){
// 	throw new Exception('You must send a team_id with your request');
// }
// $team_id = $_GET['team_id'];

$query = "SELECT `team_full_name`, `team_name`, `team_code`, `colors`, `league_name` FROM `teams` WHERE `id` = $team_id";
$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception(mysqli_error($conn));
}

if( mysqli_num_rows($result) === 0){
	throw new Exception("no team matches product id $team_id");
}

$team_data = mysqli_fetch_assoc($result);

if(empty($_SESSION['homepage_id'])){
	$homepage_create_query = "INSERT INTO `user_teams` SET 
		`user_id` = $user_id,
		`team_id` = $team_id
	";
	$homepage_result = mysqli_query($conn, $homepage_create_query);
	if(!$homepage_result){
		throw new Exception(mysqli_error($conn));
	}
	if(mysqli_affected_rows($conn)===0){
		throw new Exception('data was not added to user_teams table');
	}
	$homepage_id = mysqli_insert_id($conn);
	$_SESSION['homepage_id'] = $homepage_id;
}

$output = [
	'success' => true
];

print( json_encode($output));
?>