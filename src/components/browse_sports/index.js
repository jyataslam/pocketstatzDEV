import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingChoose from './home_choose_sports';
// import BrowseSports from './browse_sports';
import BrowseNba from '../browse_teams/index';

import './browse_sports.scss';

export default props => {
    return (
        <div className="landing-choose">
            <Route path="/browse" exact component={LandingChoose} />

            <Route path="/browse/nba" render={routingProps => {
                return <BrowseNba {...routingProps} />
            }} />
        </div>
    )
}