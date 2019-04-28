import React, {Component} from 'react';
import SignInForm from './sign_in_form';


class SignIn extends Component {

    handleSignIn = (values) =>
    {
        
    }
    render() {
        return (
            <div>
                <h3 className="center">Logo goes here</h3>
                <h4 className="center">Sign in to your account</h4>
                <SignInForm />
            </div>
        );
    }
}

export default SignIn;
