import axios from 'axios';
import types from './types';

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

export const teamList = (props) => async dispatch => {
    const response = await axios.get(`/api/getteam.php?sport_name=${props.leagueName}`);
        if (response.data.success) {
            return dispatch({
                type: types.RETRIEVE_TEAMS,
                response: {
                    isLoaded: true,
                    teams: response.data.teams
                }
            });
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

export const nhlGameInfo = (props) => async dispatch => {
    const resp = await axios.get(`/api/see-a-specific-team.php?team_id=${props.match.params.team_id}`);
    // const resp2 = await axios.get(`/api/getnhlgamestats.json?team_name=${resp.data.api_key}`);
    
    // resp2 is currently calling dummy data. use above when endpoint is finished
    const resp2 = await axios.get(`/api/data/getnhlgamestats.json`);

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