import types from '../actions/types';

const DEFAULT_STATE = {
    teams: null,
    selectedTeams: [],
    clicked: false
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type)
    {
        case types.RETRIEVE_TEAMS:
            return { ...state, ...action.response };
        default:
            return state;
    }
}