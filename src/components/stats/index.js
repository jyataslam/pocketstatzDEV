import React, {Component, Fragment} from 'react';
import TeamScore from './team_score/team_score';
import TeamsTab from './teams_tab/teams_tab';
import axios from 'axios';
import PlayerStats from './players_stats/players_stats';
import {connect} from "react-redux";
import {gameInfo, loadStart, loadEnd} from "../../actions";
import LoadingScreen from "../loading_screen";

class GameInfo extends Component {

    state = {
        view: "left",
        isLoaded: false,
        team1: null,
        team2: null,
        gameDetails: null
    }   

    async componentDidMount(){
        this.props.loadStart();
        await this.props.gameInfo(this.props);
        this.props.loadEnd();
        // this.getGameStats();  
    }

    // async getGameStats(){

    //     const resp = await axios.get(`/api/see-a-specific-team.php?team_id=${this.props.match.params.team_id}`);
    //     const resp2 = await axios.get(`/api/getnbagameid.php?team_name=${resp.data.api_key}`);
        
    //     if (typeof resp2.data === 'object'){
    //         this.setState({
    //             team1: resp2.data.awayTeam,
    //             team2: resp2.data.homeTeam,
    //             gameDetails: resp2.data.gameDetails,
    //             isLoaded: true
    //         });
    //         } else {
    //             // make axios call to get last game available from regular season and setState as above
    //             console.log('no team data available');
    //         }

    //     // axios.get(`/api/see-a-specific-team.php?team_id=${this.props.match.params.team_id}`).then((resp) => {
    //     //     axios.get(`/api/getnbagameid.php?team_name=${resp.data.api_key}`).then((resp) => {
    //     //         if (typeof resp.data === 'object'){
    //     //         this.setState({
    //     //             team1: resp.data.awayTeam,
    //     //             team2: resp.data.homeTeam,
    //     //             gameDetails: resp.data.gameDetails,
    //     //             isLoaded: true
    //     //         });
    //     //         } else {
    //     //             // make axios call to get last game available from regular season and setState as above
    //     //             console.log('no team data available');
    //     //         }
    //     //     })
    //     // });
    // }

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
        const {view, team1, team2, gameDetails} = this.props.gameStats;
        const {showLeft, showRight} = this;

        if (!this.props.isLoaded) {
            return <LoadingScreen />
        }

        return(
            
            <Fragment>
                <TeamScore team1={team1} team2={team2} gameDetails={gameDetails}/>
                <TeamsTab team1={team1} team2={team2} showLeft={showLeft} showRight={showRight}/>
                <PlayerStats view={view} team1={team1} team2={team2}/>
            </Fragment> 
            
        );
    }
}

function mapStateToProps(state)
{
    return{
        isLoaded: state.loading.isLoaded,
        gameStats: state.stats
    }
}

export default connect(mapStateToProps, {
    gameInfo, loadStart, loadEnd
})(GameInfo);