<?php

// Get cURL resource
$ch = curl_init();

// Will need to get team abbreviation dynamically
$team = $_GET['team_name'];
// print_r($team);
// exit();

// Set url
curl_setopt($ch, CURLOPT_URL, "https://api.mysportsfeeds.com/v2.1/pull/nba/latest/games.json?limit=1&status=final&sort=game.starttime.d&team=$team");

// Set method
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

// Set options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Set compression
curl_setopt($ch, CURLOPT_ENCODING, "gzip");

// Set headers
curl_setopt($ch, CURLOPT_HTTPHEADER, [
	"Authorization: Basic " . base64_encode("3e6e4d51-a167-4f95-bd66-1e0b36" . ":" . "MYSPORTSFEEDS")
]);

// Send the request & save response to $resp
$resp = curl_exec($ch);

if (!$resp) {
	die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
} else {
    $decodedResp = json_decode($resp);
    $gameId = $decodedResp->games[0]->schedule->id;
    $_GET['game_id'] = $gameId;
    include 'getnbagamestats.php';
}
// Close request to clear up some resources
// curl_close($ch);

?>