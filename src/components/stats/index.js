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
        team2: null,
        gameDetails: null
    }   

    componentDidMount(){
        this.getGameStats();  
    }

    getGameStats(){
        axios.get(`/api/see-a-specific-team.php?team_id=${this.props.match.params.team_id}`).then((resp) => {
            axios.get(`/api/getnbagameid.php?team_name=${resp.data.api_key}`).then((resp) => {
                if (typeof resp.data === 'object'){
                this.setState({
                    team1: resp.data.awayTeam,
                    team2: resp.data.homeTeam,
                    gameDetails: resp.data.gameDetails,
                    isLoaded: true
                });
                } else {
                    // make axios call to get last game available from regular season and setState as above
                    console.log('no team data available');
                }
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
        const {view, team1, team2, gameDetails, isLoaded} = this.state;
        const {showLeft, showRight} = this;
        return(
            
            <Fragment>
                {isLoaded && <TeamScore team1={team1} team2={team2} gameDetails={gameDetails}/>}
                {isLoaded && <TeamsTab team1={team1} team2={team2} showLeft={showLeft} showRight={showRight}/>}
                {isLoaded && <PlayerStats view={view} team1={team1} team2={team2}/>}
            </Fragment> 
            
        );
    }
}

export default GameInfo;