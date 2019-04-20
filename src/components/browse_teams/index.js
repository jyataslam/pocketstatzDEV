import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TeamList from './team_list';
import GameInfo from '../stats';
import './browse.scss';

export default props => {
    return (
        <div className="browse">
            <Route path="/browse/nba" exact component={TeamList}/>
            <Route path="/nba/:team_id" render={(routingProps) => {
                    return <GameInfo />
                }}/>
        </div>
    )
}