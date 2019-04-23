import React, {Component, Fragment} from 'react';
import TeamButton from './team_button/team_button';
import axios from 'axios';

class HomeTeamList extends Component {
    state = {
        userTeams: [],
        isLoaded: false
    }
    
    componentDidMount(){
        this.getUserTeams();
    }

    async getUserTeams(){
        const response = await axios.get(`/api/gethomepageteams.php`);

        if (response.data.success){
            this.setState({
                userTeams: response.data.homepage_items,
                isLoaded: true
            });
        }
    }

    goToTeamStats = (teamID) => {
        this.props.history.push(`/nba/${teamID}`);
    }

    render(){
        const homepageTeamList = this.state.userTeams.map((team) => {
            return <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats}/>
        });
        const { isLoaded } = this.state;

        return(
                <ul>
                    {isLoaded && homepageTeamList}
                </ul>
        );
    }
}

export default HomeTeamList;