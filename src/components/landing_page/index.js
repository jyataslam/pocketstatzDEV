import React from "react";
import { Link } from 'react-router-dom';
import "./landing_page.scss";

export default props => {
    return(
        <div>
            <div className=" welcome-header center">Welcome to Pocket Statz!</div>
            <div className="divider"></div>
            <p className="center">Get the latest stats of your favorite sport teams</p>
            <div className="row">
                <Link to="/log-in" className="center btn  col s4 offset-s1 hide-on-med-and-up">Login</Link>                
                <Link to="/log-in" className="center btn col s4 offset-s2 hide-on-med-and-up">Sign-up</Link>               
                <Link to="/log-in" className="center btn btn-large col m3 offset-m3 hide-on-small-only">Login</Link>
                <Link to="/log-in" className="center btn btn-large col  m3 hide-on-small-only">Sign-up</Link>
            </div>

            <div className="row">
                <Link to="/browse" className="center btn col s4 offset-s4 hide-on-med-and-up">Guest</Link>
                <Link to="/browse" className="center btn btn-large col m4 offset-m4 hide-on-small-only">Guest</Link>
            </div>
        </div>
        
    );
}