import React, { Component } from 'react';
import SignUpForm from './sign_up_form';
import { clearErrors, signUp, signIn } from "../../../actions";
import { connect } from "react-redux";

class SignUp extends Component {
    handleSignUp = values => {
        if (this.props.signUp(values)) {
            this.props.signIn(values);
        };
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const { error } = this.props;
        return (
            <div className="signin-container">
                <div className="container">
                    <img className="signin-icon col s12 m8 offset-m2" src="/dist/assets/images/logos/pocketstatzicon.png" alt="LOGO" />
                    <p className="center signin-text">Create Your Account</p>
                    <SignUpForm signUp={this.handleSignUp} />
                    <p className="center">{(error) ? "Username is taken" : ""}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.user.error
    }
}

export default connect(mapStateToProps, {
    signUp,
    signIn,
    clearErrors
})(SignUp);
