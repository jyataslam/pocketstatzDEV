<?php

// Get cURL resource
$ch = curl_init();

// Set url
curl_setopt($ch, CURLOPT_URL, "https://api.sportsdata.io/v3/lol/stats/json/BoxScore/".$_GET['game_id']);

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
    print_r($decodedResp);
    //some games give stats, some don't (Matches/PlayerGames/TeamGames arrays are all empty)
    //100003375: April 13 (latest game), no stats
    //100003374: April 7 (2nd latest), full stats
    //100002630: March 17, full stats. Everything from March 17 to April 6 has no stats
}

// Close request to clear up some resources
curl_close($ch);

?>