import React, {Component} from 'react';
import SignInForm from './sign_in_form';
import {signIn} from "../../../actions";
import {connect} from "react-redux";


class SignIn extends Component {

    handleSignIn = (values) => {
        this.props.signIn(values);
    }
    
    render() {
        return (
            <div>
                <h3 className="center">Logo goes here</h3>
                <h4 className="center">Sign in to your account</h4>
                <SignInForm signIn={this.handleSignIn}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        signIn: state.user
    }
}

export default connect(mapStateToProps, {
    signIn: signIn
})(SignIn);



