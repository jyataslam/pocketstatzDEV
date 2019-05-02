import React, {Component} from 'react';
import "./teams_tab.scss";

class TeamsTab extends Component {
    render(){
        console.log("teams tab props:", this.props);
        const margin = {"margin": "10px 0"};
        const height = {"height": "20px", "lineHeight": "inherit"};

        return(
            <div id="buttons-container">
                <div className="row" id="row">
                        <button className="btn col s6"  onClick={this.props.showLeft}>{this.props.team1.teamName}</button>
                        <button className="btn col s6"  onClick={this.props.showRight}>{this.props.team2.teamName}</button>
                </div>
            </div>
        );
    }
}

export default TeamsTab;