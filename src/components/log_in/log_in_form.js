import React from 'react';

const LogInForm = props => {
    const buttonStyle = {
        'color': 'black',
        'font-size': '1.5rem'
    }

    return (
        <form>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <input id="username" type="text"/>
                    <label for="username">Username</label>
                </div>
                <div className="input-field col s12 m6 offset-m3">
                    <input id="password" type="password"/>
                    <label for="password">Password</label>
                </div>
            </div>

            <div className="row">
                <button className="btn green col s12 m4 offset-m4" style={buttonStyle}>Sign In</button>
            </div>
        </form>
    );
}

export default LogInForm;
