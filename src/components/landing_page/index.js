import React from "react";
import { Link } from 'react-router-dom';
import "./landing_page.scss";

export default props => {
    return(
        <div>
            <h1 className="center">Welcome to Pocket Statz!</h1>
            <div className="divider"></div>
            <h3 className="center">Get the latest stats of your favorite sport teams</h3>
            <div className="row">
                <Link to="/log-in" className="center btn btn-large col s3 offset-s3">Login </Link>
                <Link to="/log-in" className="center btn btn-large col s3  offset">Sign-up</Link>
            </div>
            <div className="row">
                <Link to="/browse" className="center btn btn-large col s4 offset-s4">Guest</Link>
            </div>
        </div>
        
    );
}