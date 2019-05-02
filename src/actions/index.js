import axios from 'axios';
import types from './types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

export const checkAuth = () => async dispatch => {
    const resp = await axios.get('/api/login-status.php');

    if(resp.data.success)
    {
        return dispatch({
            type: types.SIGN_IN_USER,
            response: {
                auth: true
            }
        });
    }
    else
    {
        return dispatch({
            type: types.SIGN_OUT_USER
        });
    }
}

export function clearErrors() {
    return {
        type: types.CLEAR_ERRORS
    }
}

export const signIn = (user) => async dispatch => {
    const notify = async () => toast.error('Error: Invalid username or password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });

    const response = await axios.post(`/api/login.php`, user);
    console.log('sign in error: ', response.data.error);
    if(response.data.success)
    {
        console.log(`${response.data.username} Logged in!`);
        return dispatch({
            type: types.SIGN_IN_USER,
            response: {
                auth: true,
                username: response.data.username,
            }
        })
    }
    else
    {
        return dispatch({
            type: types.SIGN_IN_ERROR,
            response: {
                auth: false,
                error: response.data.error
            }
        })
    }
}

export const signOut = () => async dispatch => {
    const response = await axios.get("/api/sign-out.php");
    console.log("Sign out response:", response);
    
    return dispatch({
        type: types.SIGN_OUT_USER,
        response: {
            auth: false,
            username: ""
        }
    });
}

export const signUp = (user) => async  dispatch => {
    const response = await axios.post(`/api/add-user.php`, user);
    console.log("Response from signUp:", response);
    if(response.data.success)
    {
        console.log(`Created account for ${response.data.username}`);
        return dispatch({
            type: types.SIGN_UP_USER,
            response: {
                username: response.data.username
            }
        });
    }
    else
    {
        console.log(response.data.error);
        return dispatch({
            type: types.SIGN_UP_ERROR,
            response: {
                auth: false,
                error: response.data.error
            }
        })
    }
}

export const teamList = (props) => async dispatch => {
    const response = await axios.get(`/api/getteam.php?sport_name=${props.leagueName}`);
        if (response.data.success) {
            return dispatch({
                type: types.RETRIEVE_TEAMS,
                response: {
                    [props.leagueName]: response.data.teams
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
    const resp2 = await axios.get(`/api/getnhlgameid.php?team_name=${resp.data.api_key}`);
    
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

export const getUserTeams = (props) => async dispatch => {
    const resp = await axios.get(`/api/gethomepageteams.php`);
    console.log("response from db is:", resp);

    return dispatch({
        type: types.RETRIEVE_USER_TEAMS,
        response: {
            userTeams: resp.data.homepage_items
        }
    });
}

export const deleteUserTeam = (id) => async dispatch => {
    const resp = await axios.get(`/api/delete-user-team.php?team_id=${id}`)

    return dispatch({
        type: types.DELETE_USER_TEAM
        // response: {
        //     userTeams: newTeamsArray.filter((team) => {
        //         return team.team_id !== targetTeamId;
        //     })
        // }
    });
}

// deleteSignedInUserTeam = async (targetTeamId) => {
//     const resp = await axios.get(`/api/delete-user-team.php?team_id=${targetTeamId}`)
//     console.log("delete signed in user response:", resp);
//     const newTeamsArray = [...this.state.userTeams];

//     if (resp.data.success) {
//         this.setState({
//             userTeams: newTeamsArray.filter((team) => {
//                 return team.team_id !== targetTeamId;
//             })
//         });
//     }
//     else {
//         console.log(resp.error);
//     }
// }