import React, {Component} from 'react';
import SignUpForm from './sign_up_form';
import {signUp} from "../../../actions";
import {connect} from "react-redux";

class SignUp extends Component {

    handleSignUp = values => {
        this.props.signUp(values);
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

function mapStateToProps(state){
    return{
        signIn: state.user
    }
}

export default connect(mapStateToProps, {
    signUp: signUp
})(SignUp);


