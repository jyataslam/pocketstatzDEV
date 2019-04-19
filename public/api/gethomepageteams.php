<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

// if(empty($_SESSION['homepage_id'])){
//     throw new Exception('Missing homepage id');
// }

$user_id = 1;
//the homepage id is created in addteam.php
$homepage_id = 1;
// $homepage_id = $_SESSION['homepage_id'];


//linking the team info to the user teams (id from teams to team_id from user_teams)
//linking the user teams for the user (user_id from user_teams to id from users)

//currently works - but will not having a 'cart' as an intermediary screw us in the long term with multiple users? double check with andy
$homepage_query = "SELECT 
    u_t.`team_id`,
    t.`id`, t.`team_full_name`, t.`team_name`, t.`team_code`, t.`colors`, t.`league_name`, t.`image_url`
    FROM `users` AS `u`
    JOIN `user_teams` AS `u_t` ON u_t.`user_id` = u.`id`
    JOIN `teams` AS `t` ON t.`id` = u_t.`team_id`
    WHERE u_t.`user_id` = $homepage_id AND u.`id` = $user_id";

$homepage_data = mysqli_query($conn, $homepage_query);

if(!$homepage_data){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($homepage_data) === 0) {
    throw new Exception('Unable to retrieve homepage data');
}

$output['homepage_items'] = [];

while($row = mysqli_fetch_assoc($homepage_data)){
    $output['homepage_items'][] = [
        'team_id' => (int) $row['team_id'],
        'team_full_name' => $row['team_full_name'],
        'team_name' => $row['team_name'],
        'team_code' => $row['team_code'],
        'logo' => $row['image_url'],
        'colors' => $row['colors'],
        'league_name' => $row['league_name']
    ];
}

$output['success'] = true;

print(json_encode($output));

?>