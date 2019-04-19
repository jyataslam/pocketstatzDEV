import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingChoose from './home_choose_sports';
import './browse_sports.scss';

export default props => {
    return (
        <div className="landing-choose">
            <Route path="/browse" exact component={LandingChoose} />
        </div>
    )
}