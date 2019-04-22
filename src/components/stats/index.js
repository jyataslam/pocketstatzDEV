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
        axios.get(`/api/data/getgamestats.json`).then((resp) => {
            this.setState({
                isLoaded: true,
                team1: resp.data.team1,
                team2: resp.data.team2
            });
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
                <TeamScore />   {/*pass in data from axios call as props*/}
                <TeamsTab showLeft={showLeft} showRight={showRight}/>
                {isLoaded && <PlayerStats view={view} team1={team1} team2={team2}/>}
            </Fragment> 
            
        );
    }
}

export default GameInfo;