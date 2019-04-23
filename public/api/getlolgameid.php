<?php

// Get cURL resource
$ch = curl_init();

$team = '100';

// Set url
curl_setopt($ch, CURLOPT_URL, "https://api.sportsdata.io/v3/lol/scores/json/CompetitionDetails/100000005");

// Set method
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

// Set options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Set compression
curl_setopt($ch, CURLOPT_ENCODING, "gzip");

// Set headers
curl_setopt($ch, CURLOPT_HTTPHEADER, [
	"Ocp-Apim-Subscription-Key: 8e4fde7a044c4bea8eb71531fe44afb8"
]);

// Send the request & save response to $resp
$resp = curl_exec($ch);

if (!$resp) {
	die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
} else {
    $decodedResp = json_decode($resp);
    $endOfArray = count($decodedResp->Games) - 1;
    for ($gameIndex = $endOfArray; $gameIndex; $gameIndex--) {
        if ($decodedResp->Games[$gameIndex]->TeamAKey === $team || $decodedResp->Games[$gameIndex]->TeamBKey === $team) {
            $gameId = $decodedResp->Games[$gameIndex]->GameId;
            $_GET['game_id'] = $gameId;
            include 'getlolgamestats.php';
            return;
        }
    }
}

// Close request to clear up some resources
// curl_close($ch);

?>