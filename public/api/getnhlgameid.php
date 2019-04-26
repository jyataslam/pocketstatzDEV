<?php

// Get cURL resource
$ch = curl_init();

$team = $_GET['team_name'];

// Set url
curl_setopt($ch, CURLOPT_URL, "https://api.mysportsfeeds.com/v2.1/pull/nhl/latest/games.json?date=until-today&limit=2&sort=game.starttime.d&team=$team");

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

    //if team is not playing in current season (ex: team is not in playoffs), go back further
    if ($decodedResp->games === []) {
        unset($resp, $decodedResp);
        $lastSeason = (date("Y")-1)."-".date("Y");
        curl_setopt($ch, CURLOPT_URL, "https://api.mysportsfeeds.com/v2.1/pull/nhl/$lastSeason/games.json?limit=1&status=final&sort=game.starttime.d&team=$team");
        $resp = curl_exec($ch);
        $decodedResp = json_decode($resp);
    }

    //store ID from most recent game in $_GET
    $_GET['latestGameId'] = $decodedResp->games[0]->schedule->id;

    //if team is in current season, should give 2 most recent IDs, so store the second too
    if (!empty($decodedResp->games[1])) {
        $_GET['backupGameId'] = $decodedResp->games[1]->schedule->id;
    }
    
    include 'getnhlgamestats.php';
}

?>