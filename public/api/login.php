<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

if(empty($_POST['username']))
{
    throw new Exception('Username is a required value');
}

if(empty($_POST['password']))
{
    throw new Exception('Password is a required value');
}

$username = $_POST['username'];
$password = $_POST['password'];

$hashedPassword = sha1($password);
unset($_POST['password']);

$query = "SELECT `id`, `username` FROM `users`
    WHERE `username` = '$username' AND `password` = '$hashedPassword'";

$result = mysqli_query($conn, $query);

if(!$result)
{
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($result) !== 1)
{
    throw new Exception('Invalid username or password');
}

$data = mysqli_fetch_assoc($result);

$output['success'] = true;
$output['username'] = $data['username'];

$jsonOutput = json_encode($output);

print($jsonOutput);




?>