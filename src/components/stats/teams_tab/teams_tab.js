import React, {Component} from 'react';


class TeamsTab extends Component {
    render(){
        const margin = {"margin": "10px 0 -10px 0"};
        const height = {"height": "20px", "lineHeight": "inherit"};
        // change toggle button color depending on the team's color

        return(
            <div id="buttons-container">
                <div className="row" style={margin}>
                        <button className="btn btn-small col s4 offset-s1 grey darken-3" style={height} onClick={this.props.showLeft}>{this.props.team1.teamName}</button>
                        <button className="btn btn-small col s4 offset-s2 grey darken-3" style={height} onClick={this.props.showRight}>{this.props.team2.teamName}</button>
                </div>
            </div>
        );
    }
}

export default TeamsTab;