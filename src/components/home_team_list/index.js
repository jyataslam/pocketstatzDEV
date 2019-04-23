import React, { Component, Fragment } from 'react';
import TeamButton from './team_button/team_button';
import axios from 'axios';

class HomeTeamList extends Component {
    state = {
        userTeams: [],
        isLoaded: false
    }

    componentDidMount() {
        this.getUserTeams();
    }

    async getUserTeams() {
        let localData = localStorage.homeTeamIds;
        console.log('local data string: ', localData);
        const response = await axios.get("/api/list-user-teams.php", {
            params: {
                team_ids: localData
            }
        });
        console.log('response', response.data.user_teams);
        this.setState({
            userTeams: response.data.user_teams,
            isLoaded: true
        });
        console.log('state after update: ', this.state);
    }

    goToTeamStats = (teamID) => {
        this.props.history.push(`/nba/${teamID}`);
    }

    render() {
        const { isLoaded } = this.state;
        if (isLoaded) {
            console.log('state loaded: ', this.state.userTeams);
            const homepageTeamList = this.state.userTeams.map((team) => {
                console.log(team);
                return <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} />
            });
            return (
                <ul>
                    {isLoaded && homepageTeamList}
                </ul>
            );
        } else {
            console.log('state not loaded: ', this.state.userTeams);
            return <h1>Loading...</h1>
        }
    }
}

export default HomeTeamList;