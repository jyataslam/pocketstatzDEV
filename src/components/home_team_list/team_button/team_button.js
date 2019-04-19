import React, {Component} from 'react';
import './team_button.scss';

class TeamButton extends Component {
    render(){

        const {teamName} = this.props;
        return(
            <div className="container">
                <div className="row">
                    <button className="btn btn-large yellow darken-2 col s12">{teamName}</button>
                </div>
            </div>
            
        );
    }
}

export default TeamButton;