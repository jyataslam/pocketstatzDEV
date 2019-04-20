<?php 

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

//needs the sport id (unique id from league table) to be sent through a get axios call
if(empty($_GET['sport_id'])){
    throw new Exception('sport_id is a required value');
}

$sport_type = $_GET['sport_id'];

//prints out an alphabetical list of team names from nba (1) or overwatch (2)
$query = "SELECT t.`id`, t.`team_full_name`, t.`league_name`
	FROM `teams` AS t
    JOIN `league` AS l ON t.`league_name` = l.`mid`
    WHERE l.`id` = $sport_type
	ORDER BY t.`league_name`
";

$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception('invalid query: '. mysqli_error($conn));
}

if(mysqli_num_rows($result) === 0) {
    throw new Exception('unable to retrieve team data');
}

$output['teams'] = [];

while($row = mysqli_fetch_assoc($result)){
    $output['teams'][] = [
        'id' => (int) $row['id'],
        'team_full_name' => $row['team_full_name'],
        'league_name' => $row['league_name']
    ];
}

$output['success'] = true;

$json_output = json_encode( $output );
print( $json_output );