import React from "react";
import { Link } from 'react-router-dom';
import "./landing_page.scss";

export default props => {
    return(
        <div className="landing-container">
            <div className=" welcome-header center">
            <img className="welcome-logo col s12 m8 offset-m2" src="/dist/assets/images/logos/pocketstatzlogo.png" alt="LOGO"/>
            </div>
            <p className="center welcome-text">The Latest Stats From Your Favorite Teams</p>
            <div className="row">
                <Link to="/account/sign-in" id="landing-btn" className="center btn col s4 offset-s1 hide-on-med-and-up orange darken-3">Sign In</Link>                
                <Link to="/account/sign-up" id="landing-btn" className="center btn col s4 offset-s2 hide-on-med-and-up orange darken-3">Sign Up</Link>    

                <Link to="/account/sign-in" id="landing-btn" className="center btn btn-large col m3 offset-m3 hide-on-small-only orange darken-3">Sign In</Link>
                <Link to="/account/sign-up" id="landing-btn" className="center btn btn-large col m3  hide-on-small-only orange darken-3">Sign Up</Link>
            </div>

            <div className="row guest-container">
                <Link to="/browse" id="landing-btn-guest" className="center btn col s4 offset-s4 hide-on-med-and-up">Guest</Link>
                <Link to="/browse" id="landing-btn-guest" className="center btn btn-large col m4 offset-m4 hide-on-small-only">Guest</Link>
            </div>
        </div>
    );
}