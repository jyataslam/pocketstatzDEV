import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TeamList from './team_list';
import GameInfo from '../stats';
import './browse.scss';

export default props => {
    return (
        <div className="browse">
            
            <Route path="/browse/nba" render={(routingProps) => {
                    return <TeamList {...routingProps} leagueName = 'nba'/>
                }}/>
            <Route path="/nba/:team_id" render={(routingProps) => {
                    return <GameInfo {...routingProps}/>
                }}/>

            <Route path="/browse/nhl" render={(routingProps) => {
                    return <TeamList {...routingProps} leagueName = 'nhl'/>
                }}/>
            <Route path="/nhl/:team_id" render={(routingProps) => {
                    return <GameInfo {...routingProps}/>
                }}/>
        </div>
    )
}