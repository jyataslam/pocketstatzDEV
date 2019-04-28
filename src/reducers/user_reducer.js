import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    username: ""
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.LOG_IN_USER:
            return{...state, ...action.response};
        default:
            return state;
    }
};

