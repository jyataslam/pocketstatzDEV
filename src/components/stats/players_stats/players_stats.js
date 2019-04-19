import React, {Component} from 'react';
import './players_stats.scss';

class PlayerStats extends Component {   

        //make funciton to return table jsx here and call in render ternary
    render(){
        return(
            <h1 className="center">
                {this.props.view === "left" ? "LAKERS" : "WARRIORS"}
            </h1>
        );
    }

}

export default PlayerStats;