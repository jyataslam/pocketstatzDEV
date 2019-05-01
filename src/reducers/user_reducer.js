import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    username: ""
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_IN_USER:
            return{...state, ...action.response};
        case types.SIGN_OUT_USER:
            return {...DEFAULT_STATE};
        default:
            return state;
    }
};

    