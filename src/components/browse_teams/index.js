import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TeamList from './team_list';
import GameInfo from '../stats';

export default props => {
    return (
        <div className="browse">
            <Route path="/nba-team-list" exact component={TeamList}/>
            <Route path="/nba-team-list/:team_name" render={(routingProps) => {
                    return <GameInfo />
                }}/>
        </div>
    )
}