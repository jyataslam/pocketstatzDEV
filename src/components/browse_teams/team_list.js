import React, { Component } from 'react';
import Team from './team';
import axios from 'axios';
import Buttons from './confirm_buttons';

class TeamList extends Component {
    state = {
        isLoaded: false,
        teams: null,
        selectedTeams: []
    }

    componentDidMount() {
        
        this.getTeams();
    }

    chooseTeam = (teamName) => {
        const { selectedTeams } = this.state;
        this.setState({
            selectedTeams: [...selectedTeams, teamName],
            isLoaded: true
        });
        this.setTeamForHome();
        this.props.history.push(`/nba/${teamName}`);
    }

    async setTeamForHome(){
        const { selectedTeams } = this.state;
        const response = await axios.get(`/api/data/getteam.json?id=${selectedTeams}`);
        console.log('set team for home, ', response);
    }

    async getTeams() {
        const response = await axios.get("/api/data/getteam.json");
        if (response.data.success){
            this.setState({
                isLoaded: true,
                teams: response.data.teams
            });
        }       
    }

    confirmRoute = () => {
        this.props.history.push(`/my-teams/`);
        console.log(this.state.selectedTeams);
    }

    backToSports = () => {
        this.props.history.push("/browse");
        console.log(this.state.selectedTeams);
    }

    render() {
        if(this.state.isLoaded)
        {
            const teamList = this.state.teams.map((team) => {
                return <Team key={team.id} {...team} chooseTeam={this.chooseTeam} />
            });

            const {selectedTeams} = this.state;

            const border = {"border": "none"};
    
            if (selectedTeams.length === 0){
                return (
                    <div className="team-list row">
                        <div className="container">
                            <ul style={border} className="collection team-collection">
                                {teamList}
                            </ul>
                        </div>
                    </div>
                )
            } 
            else {
                return (
                    <div className="team-list">
                        <div className="container">
                        <Buttons confirm={this.confirmRoute} back={this.backToSports}/>
                        <div className="row">
                            <ul style={border} className="collection team-collection">
                                {teamList}
                            </ul>
                        </div>
                        </div>
                    </div>
                )
            }  
        }
        return(null);
    }
}

export default TeamList;
