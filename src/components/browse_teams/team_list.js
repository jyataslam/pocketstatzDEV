import React, { Component } from 'react';
import Team from './team';
import axios from 'axios';

class TeamList extends Component {
    state = {
        teams: [],
        selectedTeams: []
    }

    componentDidMount() {
        // call getTeams() to populate list
    }

    chooseTeam = () => {
        // on select, store chosen team in state.selectedTeams
    }

    confirmButton = () => {
        // route to 'choose sport' page
    }

    getTeams() {
        // axios call here, store response data in state
    }

    render() {
        // map through array of teams in state, save into variable and deploy below

        return (
            <div className="team-list row">
                <div className="container">
                    <ul className="collection team-collection">
                        <Team />
                    </ul>
                </div>
            </div>
        )
    }
}

export default TeamList;
