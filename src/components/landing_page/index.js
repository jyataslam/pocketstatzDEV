import React from "react";
import { Link } from 'react-router-dom';
import "./landing_page.scss";

export default props => {
    return(
        <div>
            <div className=" welcome-header center">Welcome to Pocket Statz!</div>
            <div className="divider"></div>
            <p className="center">Get the latest stats from your favorite sport teams</p>
            <div className="row">
                <Link to="/account/sign-in" className="center btn  col s4 offset-s1 hide-on-med-and-up grey darken-3">Sign In</Link>                
                <Link to="/account/sign-up" className="center btn col s4 offset-s2 hide-on-med-and-up grey darken-3">Sign Up</Link>               
                <Link to="/account/sign-in" className="center btn btn-large col m3 offset-m3 hide-on-small-only grey darken-3">Sign In</Link>
                <Link to="/account/sign-up" className="center btn btn-large col  m3 hide-on-small-only grey darken-3">Sign Up</Link>
            </div>

            <div className="row">
                <Link to="/browse" className="center btn col s4 offset-s4 hide-on-med-and-up grey">Guest</Link>
                <Link to="/browse" className="center btn btn-large col m4 offset-m4 hide-on-small-only grey">Guest</Link>
            </div>
        </div>
        
    );
}