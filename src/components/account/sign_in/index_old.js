import React, {Component} from 'react';
import SignInForm from './sign_in_form';
import {signIn} from "../../../actions";
import {connect} from "react-redux";


class SignIn extends Component {

    handleSignIn = (values) => { 
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        signIn(values);

        axios.post(`/api/login.php`, user).then(resp => {
            console.log("repsonse:", resp);
            if(resp.data.success)
            {
                console.log(`${resp.data.username} Logged in!`);
            }
            else
            {
                console.log(resp.data.error);
            }
        });
        event.preventDefault();
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

function mapStateToProps(state)
{
    return{
        signIn: state.user
    }
}

export default connect(mapStateToProps, {
    signIn: signIn
})(SignIn);







    // handleUsernameChange = (event) =>
    // {
    //     this.setState({
    //         username: event.target.value
    //     });
    // }

    // handlePasswordChange = (event) => 
    // {
    //     this.setState({
    //         password: event.target.value
    //     });
    // }