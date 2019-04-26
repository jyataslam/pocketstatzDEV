import axios from 'axios';
import types from './types';

//action creator for loading-screen component
// export function gameInfo(){
//     return {
//         type: "GAME_INFO"
//     }
// }

export function loadStart() {
    return {
        type: types.LOAD_START
    }
}

export function loadEnd() {
    return {
        type: types.LOAD_END
    }
}

export const gameInfo = (props) => async dispatch => {
    const resp = await axios.get(`/api/see-a-specific-team.php?team_id=${props.match.params.team_id}`);
    const resp2 = await axios.get(`/api/getnbagameid.php?team_name=${resp.data.api_key}`);


    if (typeof resp2.data === 'object'){
        return dispatch({
            type: types.RETRIEVE_STATS,
            response: {
                team1: resp2.data.awayTeam,
                team2: resp2.data.homeTeam,
                gameDetails: resp2.data.gameDetails,
                isLoaded: true
            }
        });
    }
    
}