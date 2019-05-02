import React, {Component} from 'react';
import SignInForm from './sign_in_form';
import { clearErrors, signIn} from "../../../actions";
import {connect} from "react-redux";

class SignIn extends Component {
    handleSignIn = (values) => {
        this.props.signIn(values);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }
    
    render() {
        const { error } = this.props;
        return (
            <div>
                <img src="/dist/assets/images/logos/pocketstatzicon.png" alt="LOGO"/>
                <h4 className="center">Sign in to your account</h4>
                <SignInForm auth={this.props.auth} signIn={this.handleSignIn}/>
                <p className="center">{(error) ? "Invalid Username or Password" : ""}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        error: state.user.error
    }
}

export default connect(mapStateToProps, {
    clearErrors, signIn
})(SignIn);
