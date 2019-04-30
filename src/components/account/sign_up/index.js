import React, {Component} from 'react';
import SignUpForm from './sign_up_form';

class SignUp extends Component {
    handleSignUp(values) {
        console.log('values: ', values);
    }

    render() {
        return (
            <div>
                <h3 className="center">Logo goes here</h3>
                <h4 className="center">Create an account</h4>
                <SignUpForm signUp={this.handleSignUp}/>
            </div>
        );
    }
}

export default SignUp;
