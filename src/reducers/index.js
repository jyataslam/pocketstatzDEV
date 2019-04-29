import {combineReducers} from "redux";
import userReducer from "./user_reducer";
import loadingReducer from "./loading_reducer";
import statsReducer from "./stats_reducer";
import teamListReducer from "./team_list_reducer";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
    form: formReducer,
    user: userReducer,
    loading: loadingReducer,
    stats: statsReducer,
    listOfTeams: teamListReducer 
});
