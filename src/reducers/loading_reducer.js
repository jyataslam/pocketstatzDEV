import types from '../actions/types';

const DEFAULT_STATE = {
    isLoaded: false
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.LOAD_START:
            return { ...state, isLoaded: false }
        case types.LOAD_END:
            return { ...state, isLoaded: true }
        default:
            return state;
        
    }
}