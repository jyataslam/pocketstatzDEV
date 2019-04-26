import {combineReducers} from "redux";
import userReducer from "./user_reducer";
import loadingReducer from "./loading_reducer";
import statsReducer from "./stats_reducer";
import teamListReducer from "./team_list_reducer";

export default combineReducers({
    user: userReducer,
    loading: loadingReducer,
    stats: statsReducer,
    listOfTeams: teamListReducer 
});
