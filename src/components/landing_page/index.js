import React from "react";
import { Link } from 'react-router-dom';
import "./landing_page.scss";

export default props => {
    const btnColor = {'backgroundColor':'rgb(52, 54, 78)'};

    return (
        <div className="landing-container">
            <div className="welcome-header center">
                <img className="welcome-logo col s12 m8 offset-m2" src="/dist/assets/images/logos/pocketstatzlogo.png" alt="LOGO" />
            </div>
            <p className="center welcome-text">The Latest Stats From Your Favorite Teams</p>
            <section className="landing-buttons">
                <div className="row signup-buttons">
                    <Link to="/account/sign-in" id="landing-btn" className="center btn col s4 offset-s1 hide-on-med-and-up" style={btnColor}>Log In</Link>
                    <Link to="/account/sign-up" id="landing-btn" className="center btn col s4 offset-s2 hide-on-med-and-up" style={btnColor}>Sign Up</Link>

                    <Link to="/account/sign-in" id="landing-btn" className="center btn col m3 offset-m2 hide-on-small-only" style={btnColor}>Log In</Link>
                    <Link to="/account/sign-up" id="landing-btn" className="center btn col m3 offset-m2 hide-on-small-only" style={btnColor}>Sign Up</Link>
                </div>

                <div className="row guest-container">
                    <Link to="/browse" id="landing-btn-guest" className="center btn col s4 offset-s4 hide-on-med-and-up">Guest</Link>
                    <Link to="/browse" id="landing-btn-guest" className="center btn col m4 offset-m4 hide-on-small-only">Guest</Link>
                </div>
            </section>
        </div>
    );
}