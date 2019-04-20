import React from 'react';
import {Link} from 'react-router-dom';

const LogInForm = props => {
    const buttonStyle = {
        'color': 'black',
        'fontSize': '1.5rem'
    }

    return (
        <form>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <input id="username" type="text"/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-field col s12 m6 offset-m3">
                    <input id="password" type="password"/>
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row center">
                <Link to="/sign-up">No account? Create one here!</Link>
            </div>
            <div className="row">
                <button className="btn green col s12 m4 offset-m4" style={buttonStyle}>Log In</button>
            </div>
        </form>
    );
}

export default LogInForm;
