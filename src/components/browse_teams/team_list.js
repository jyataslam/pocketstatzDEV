import React, { Component } from 'react';
import Team from './team';
import axios from 'axios';
import Button from './confirm_buttons';

class TeamList extends Component {
    state = {
        isLoaded: false,
        teams: null,
        selectedTeams: []
    }

    componentDidMount() {
        this.getTeams();
    }

    chooseTeam = (id) => {
        const { selectedTeams } = this.state;
        if (selectedTeams.includes(id)) {
            return
        } else {
            this.setState({
                selectedTeams: [...selectedTeams, id]
            });
        }
    }

    async getTeams() {
        const response = await axios.get(`/api/getteam.php?sport_name=${this.props.leagueName}`);
        
        if (response.data.success){
            this.setState({
                isLoaded: true,
                teams: response.data.teams
            });
        }       
    }

    goToMyTeams = async () => {
        const sendTeamIds = this.state.selectedTeams.toString();
        const homeTeamsResponse = await axios.get("/api/list-user-teams.php", {
            params: {
                team_ids: sendTeamIds
            }
        });
        let homeTeamsIds = [];
        for (var index = 0; index < homeTeamsResponse.data.user_teams.length; index++){
            homeTeamsIds.push(homeTeamsResponse.data.user_teams[index].id);
        }
        localStorage.homeTeamIds = homeTeamsIds.toString();
        this.props.history.push(`/my-teams`);
    }

    checkStats = (id) => {
        this.props.history.push(`/${this.props.leagueName}/${id}`);
    }

    render() {
        if(this.state.isLoaded)
        {
            const teamList = this.state.teams.map((team) => {
                return <Team key={team.id} {...team} chooseTeam={this.chooseTeam} checkStats={this.checkStats}/>
            });

            const {selectedTeams} = this.state;
            const border = {"border": "none"};
    
                return (
                    <div className="team-list row">
                        <div className="container row">
                            <Button goToMyTeams={this.goToMyTeams} />
                            <div style={border}>
                                {teamList}
                            </div>
                        </div>
                    </div>
                )
        }
        return(null);
    }
}

export default TeamList;
