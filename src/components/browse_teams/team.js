import React, { Component, Fragment } from 'react';

class TeamSquare extends Component {

    replaceSpaceWithDash = (str) => {
        let newStr = "";

        for (let i = 0; i < str.length; i++) {
            if (str[i] === " ") {
                newStr += "-";
            }
            else {
                newStr = newStr + str[i];
            }
        }
        return newStr.toLowerCase();
    }

    render() {
        const { checkStats, chooseTeam, id, api_key, team_full_name } = this.props;
        const teamName = this.replaceSpaceWithDash(team_full_name);
        const teamLogo = require(`../../assets/images/${teamName}.png`);
        const fontSize = { "fontSize": "14px" };

        return (
            <Fragment>
                <div className="team-container col s6 m3" >
                    <button className="team-item z-depth-3" onClick={() => { chooseTeam(id) }}>
                        <img src={teamLogo} />
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default TeamSquare;
