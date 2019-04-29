import React from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from "redux-form";
import Input from "../../general/input";

const SignUpForm = props => {

    const {handleSubmit, signUp} = props;
    return (
        <form onSubmit={handleSubmit(signUp)}>
            <div className="row">

                <div className="col s12 m6 offset-m3">
                    <Field id="username" name="username" label="Username" component={Input}/>
                </div>

                <div className="col s12 m6 offset-m3">
                    <Field id="password" name="password" type="password" label ="Password" component={Input}/>
                </div>

                <div className="input-field col s12 m6 offset-m3">
                    <Field id="confirm-password" name="confirm-password" type="password" label ="Confirm Password" component={Input}/>
                </div>

            </div>

            <div className="row">
                <button className="btn green col s12 m4 offset-m4" >Sign Up</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: "sign-up-form"
})(SignUpForm);
