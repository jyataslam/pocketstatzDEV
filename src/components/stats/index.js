import React, {Component, Fragment} from 'react';
import TeamScore from './team_score/team_score';
import PlayerStats from './players_stats/players_stats';

class GameInfo extends Component {

    componentDidMount(){
        //make axios call for game stats
    }

    render(){
        return(
            <Fragment>
                <TeamScore />   {/*pass in data from axios call as props*/}
                <PlayerStats />
            </Fragment>
            
        );
    }
}

export default GameInfo;