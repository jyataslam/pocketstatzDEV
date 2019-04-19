import React, {Component, Fragment} from 'react';
import TeamButton from './team_button/team_button';
import axios from 'axios';

class HomeTeamList extends Component {
    state = {
        userTeams: []
    }
    
    componentDidMount(){
        this.getUserTeams();
    }

    async getUserTeams(){
        const response = await axios.get(`/api/data/gethomepageteams.json`);

        if (response.data.success){
            this.setState({
                userTeams: response.data.homepage_items
            });
        }
    }

    goToTeamStats = (teamCode) => {
        this.props.history.push(`/nba/${teamCode}`);
    }

    render(){
        const homepageTeamList = this.state.userTeams.map((team) => {
            return <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats}/>
        });

        return(
                <ul>
                    {homepageTeamList}
                </ul>
        );
    }
}

export default HomeTeamList;