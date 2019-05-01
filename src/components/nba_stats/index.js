import React, {Component, Fragment} from 'react';
import TeamScore from './team_score/team_score';
import TeamsTab from './teams_tab/teams_tab';
import PlayerStats from './players_stats/players_stats';
import {connect} from "react-redux";
import { gameInfo } from "../../actions";
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
        await this.props.gameInfo(this.props);
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
        const {team1, team2, gameDetails} = this.props.gameStats;
        const { view } = this.state;
        const {showLeft, showRight} = this;

        if (!gameDetails) {
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
        gameStats: state.stats
    }
}

export default connect(mapStateToProps, {
    gameInfo
})(GameInfo);