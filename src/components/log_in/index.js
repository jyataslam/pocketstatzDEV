import React, {Component} from 'react';
import LogInForm from './log_in_form';


class LogIn extends Component {

    handleSignIn = (values) =>
    {
        
    }
    render() {
        return (
            <div>
                <h3 className="center">Logo goes here</h3>
                <h4 className="center">Log in to your account</h4>
                <LogInForm />
            </div>
        );
    }
    //Not sure if the following function is needed?
    // handleLogIn = values => {
    //     this.props.logIn(values);
    // }
}

export default LogIn;
