import React from 'react';

const SignUpForm = props => {
    const buttonStyle = {
        'color': 'black',
        'font-size': '1.5rem'
    }

    return (
        <form>
            <div className="row">
                <div className="input-field col s12 m6 offset-m3">
                    <input type="text" id="username"/>
                    <label for="username">Username</label>
                </div>
                <div className="input-field col s12 m6 offset-m3">
                    <input type="password" id="password"/>
                    <label for="password">Password</label>
                </div>
                <div className="input-field col s12 m6 offset-m3">
                    <input type="password" id="confirmPassword"/>
                    <label for="confirmPassword">Confirm Password</label>
                </div>
            </div>

            <div className="row">
                <button className="btn green col s12 m4 offset-m4" style={buttonStyle}>Sign Up</button>
            </div>
        </form>
    );
}

export default SignUpForm;
