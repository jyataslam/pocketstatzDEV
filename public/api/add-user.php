<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

$jsonInput = file_get_contents("php://input");

$input = json_decode($jsonInput, true);

if(empty($input['username']))
{
    throw new Exception('Username is a required value');
}

if(empty($input['password']))
{
    throw new Exception('Password is a required value');
}

$username = $input['username'];
$password = $input['password'];


$username = addslashes($username);

$hashedPassword = sha1($password);
unset($input['password']);

$query = "INSERT INTO `users` SET 
		`username` = '$username',
		`password` = '$hashedPassword',
        `created_at` = NOW(),
        `last_accessed` = NOW(),
        `status` = '1'
    ";

$result= mysqli_query($conn, $query);

if(!$result)
{
    throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) !== 1)
{
    throw new Exception('Could not log you in: connection not saved');
}

$output['success'] = true;
$output['username'] = $input['username'];

$json_output = json_encode($output);

print($json_output);

    
?>