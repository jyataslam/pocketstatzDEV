import React, {Component, Fragment} from 'react';
import TeamScore from './team_score/team_score';
import TeamsTab from './teams_tab/teams_tab';
import PlayerStats from './players_stats/players_stats';

class GameInfo extends Component {

    state = {
        view: "left"
    }

    componentDidMount(){
        //make axios call for game stats
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
        const {view} = this.state;

        const {showLeft, showRight} = this;

        return(
            <Fragment>
                <TeamScore />   {/*pass in data from axios call as props*/}
                <TeamsTab showLeft={showLeft} showRight={showRight}/>
                <PlayerStats view={view}/>
            </Fragment>
            
        );
    }
}

export default GameInfo;