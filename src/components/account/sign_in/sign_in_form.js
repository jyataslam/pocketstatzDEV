import React from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from "redux-form";
import Input from "../../general/input";
import "./sign_in_form.scss";


const SignInForm = props => {
    console.log("Sign in form props:", props);
    const {handleSubmit, signIn} = props;
    return(
        <form onSubmit={handleSubmit(signIn)}>
            <div className="row">

                <div className= "col s12 m6 offset-m3">
                    <Field id="username" name="username" label="username" component={Input}/>
                </div>

                <div className="col s12 m6 offset-m3">
                    <Field id="password" name="password" type="password" label ="password" component={Input}/>
                </div>

            </div>
            <div className="row center">
                <Link to="/account/sign-up">No account? Create one here!</Link>
            </div>
            <div className="row">
                <button type ="submit" className="btn green col s12 m4 offset-m4">Log In</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: "sign-in-form"
})(SignInForm);


