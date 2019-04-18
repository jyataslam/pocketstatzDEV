import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TeamList from './team_list';
import './browse.scss';

export default props => {
    return (
        <div className="browse">
            <Route path="/nba-team-list" exact component={TeamList}/>
        </div>
    )
}