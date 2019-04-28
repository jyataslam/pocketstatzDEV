import React from "react";
import {Route, Switch} from "react-router-dom";
import SignIn from "./sign_in";
import SignUp from "./sign_up";

export default props => {
    const {match} = props;

    return(
        <Switch>
            <Route path={`${match.path}/sign-in`} component={SignIn}/>
            {/* <Route path={`${match.path}/sign-out`} component={SignOut}/> */}
            <Route path={`${match.path}/sign-up`} component={SignUp}/>
            

        </Switch>
    );
}