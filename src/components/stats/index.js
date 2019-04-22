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
        console.log('props params: ', this.props.match.params.team_id);
        // make dynamic call to php file
        axios.get(`/api/see-a-specific-team.php?team_id=${this.props.match.params.team_id}`).then((resp) => {
            console.log('specific team response: ', resp);
            axios.get(`api/getgameid.php?team_name=${resp.data.api_key}`).then((resp) => {
                console.log('team stats', resp);
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
                <TeamScore />   {/*pass in data from axios call as props*/}
                <TeamsTab showLeft={showLeft} showRight={showRight}/>
                {isLoaded && <PlayerStats view={view} team1={team1} team2={team2}/>}
            </Fragment> 
            
        );
    }
}

export default GameInfo;