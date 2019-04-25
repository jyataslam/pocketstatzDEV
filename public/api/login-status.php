<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

if(!empty($_SESSION['user_data']))
{
    $token = $_SESSION['user_data']['token'];
}
else
{
    $jsonInput = file_get_contents("php://input");
    $input = json_decode($jsonInput, true);

    if(empty($input['token']))
    {
        throw new Exception('Token is required');
    }

    $token = addslashes($input['token']);
}

$loginCheckQuery = "SELECT * FROM  `user_connections` WHERE `token` = '$token'"; 

$loginResult = mysqli_query($conn, $loginCheckQuery);

if(!$loginResult)
{
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($loginResult) !== 1)
{
    throw new Exception('Not logged in');
}

$data = mysqli_fetch_assoc($loginResult);

$output['success'] = true;

if(!empty($_SESSION['user_data']))
{
    $_SESSION['user_data'] = [
        'id' => $data['users_id'],
        'token' => $token
    ];
}

$jsonOutput = json_encode($output);

print($jsonOutput);

?>