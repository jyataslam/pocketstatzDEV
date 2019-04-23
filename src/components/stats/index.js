import React, {Component, Fragment} from 'react';
import TeamScore from './team_score/team_score';
import TeamsTab from './teams_tab/teams_tab';
import axios from 'axios';
import PlayerStats from './players_stats/players_stats';

class GameInfo extends Component {

    state = {
        view: "left",
        isLoaded: false,
        team1: null,
        team2: null
    }   

    componentDidMount(){
        this.getGameStats();  
    }

    getGameStats(){
        axios.get(`/api/see-a-specific-team.php?team_id=${this.props.match.params.team_id}`).then((resp) => {
            axios.get(`/api/getgameid.php?team_name=${resp.data.api_key}`).then((resp) => {
                this.setState({
                    team1: resp.data.awayTeam,
                    team2: resp.data.homeTeam,
                    isLoaded: true
                });
            })
        });
    }

    showLeft = () => {
        this.setState({
            view: "left"
        });
    }

    showRight = () => {
        this.setState({
            view: "right"
        });
    }

    render(){
        const {view, team1, team2, isLoaded} = this.state;
        const {showLeft, showRight} = this;
        return(
            
            <Fragment>
                {isLoaded && <TeamScore team1={team1} team2={team2}/>}
                {isLoaded && <TeamsTab team1={team1} team2={team2} showLeft={showLeft} showRight={showRight}/>}
                {isLoaded && <PlayerStats view={view} team1={team1} team2={team2}/>}
            </Fragment> 
            
        );
    }
}

export default GameInfo;