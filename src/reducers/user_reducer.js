const DEFAULT_STATE = {
    auth: false,
    username: ""
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

