<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

// $jsonInput = file_get_contents("php://input");

// $input = json_decode($jsonInput, true);

// if(empty($input['username']))
// {
//     throw new Exception('Username is a required value');
// }

// if(empty($input['password']))
// {
//     throw new Exception('Password is a required value');
// }

// $username = $input['username'];
// $password = $input['password'];

$username = 'Kobe';
$password = 'Basketball';

// $username = addslashes($username);

$hashedPassword = sha1($password);
// unset($input['password']);

$query = "INSERT INTO `users` SET 
		`username` = '$username',
		`password` = '$hashedPassword',
        `created_at` = NOW(),
        `last_accessed` = DATE(),
        `status` = 1
    ";

print($query);
    
?>