import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import "./log_in.scss";


class LogInForm extends Component{
    
    state = {
        username: "",
        password: ""
    };

    handleUsernameChange = (event) =>
    {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange = (event) => 
    {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event) => { 
        const user = {
            username: this.state.username,
            password: this.state.password
        };

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
    
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s12 m6 offset-m3">
                        <input id="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field col s12 m6 offset-m3">
                        <input id="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row center">
                    <Link to="/sign-up">No account? Create one here!</Link>
                </div>
                <div className="row">
                    <button type ="submit" className="btn green col s12 m4 offset-m4">Log In</button>
                </div>
            </form>
        );

    }
}

export default LogInForm;
