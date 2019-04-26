import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TeamList from './team_list';
import NBAGameInfo from '../nba_stats';
import './browse.scss';
// TODO Include NHLGameInfo component

export default props => {
    return (
        <div className="browse">
            
            <Route path="/browse/nba" render={(routingProps) => {
                    return <TeamList {...routingProps} leagueName = 'nba'/>
                }}/>
            <Route path="/browse/nhl" render={(routingProps) => {
                    return <TeamList {...routingProps} leagueName = 'nhl'/>
                }}/>
            <Route path="/nba/:team_id" render={(routingProps) => {
                    return <NBAGameInfo {...routingProps}/>
                }}/>

            <Route path="/browse/nhl" render={(routingProps) => {
                    return <TeamList {...routingProps} leagueName = 'nhl'/>
                }}/>
            <Route path="/nhl/:team_id" render={(routingProps) => {
                    return <NBAGameInfo {...routingProps}/>
                }}/>
        </div>
    )
}