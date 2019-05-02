import React, { Component } from 'react';
import SignUpForm from './sign_up_form';
import { clearErrors, signUp, signIn } from "../../../actions";
import { connect } from "react-redux";

class SignUp extends Component {
    handleSignUp = values => {
        if(this.props.signUp(values)){
            this.props.signIn(values);
        };
    }
    
    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const { error } = this.props;
        return (
            <div>
                <img src="/dist/assets/images/logos/pocketstatzicon.png" alt="LOGO"/>
                <h4 className="center">Create an account</h4>
                <SignUpForm signUp={this.handleSignUp}/>
                <p className="center">{(error) ? "Username is taken" : ""}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        error: state.user.error
    }
}

export default connect(mapStateToProps, {
    signUp,
    signIn,
    clearErrors
})(SignUp);
