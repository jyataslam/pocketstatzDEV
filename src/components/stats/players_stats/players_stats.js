import React, {Component} from 'react';
import './players_stats.scss';

class PlayerStats extends Component {

    state = {
        team1: "LAL",
        team2: "GSW"
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <button className="col s6">LAL</button>
                    <button className="col s6">GSW</button>
                </div>
                <div className="center">Player Stats</div>
            </div>
        );
    }

}

export default PlayerStats;