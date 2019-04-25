import React, { Component, Fragment } from 'react';
import TeamButton from './team_button/team_button';
import EmptyHomepage from './empty_homepage';
import axios from 'axios';

import './home_team_list.scss';

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
        if (localData === undefined){
            return 
        }
        const response = await axios.get("/api/list-user-teams.php", {
            params: {
                team_ids: localData
            }
        });
        this.setState({
            userTeams: response.data.user_teams,
            isLoaded: true
        });
    }

    // deleteUserTeam = (id) => {
    //     localStorage.removeItem(id);

    // }

    goToTeamStats = teamID => {
        this.props.history.push(`/nba/${teamID}`);
    }

    goToBrowse = () => {
        this.props.history.push("/browse");
        console.log('clicked');
    }

    render() {
        const { isLoaded, userTeams } = this.state;

        if (isLoaded && userTeams.length > 0) {
            const homepageTeamList = this.state.userTeams.map((team) => {
                return <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} deleteTeam={this.deleteUserTeam}/>
            });
            return (
                <ul>
                    {isLoaded && homepageTeamList}
                </ul>
            );
        } else if (userTeams.length === 0){
            return <EmptyHomepage goToBrowse={this.goToBrowse} />
        } else {
            return
        }
    }
}

export default HomeTeamList;