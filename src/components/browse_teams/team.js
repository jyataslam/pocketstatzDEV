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

{/* <Fragment>
                    <div className="team-container col s6 m3" >
                        <button ref={(element) => { this.dropdown = element }} className="team-item dropdown-trigger" data-target="dropdown1">
                            <img src={teamLogo} />
                        </button>
                        <ul  id="dropdown1" className="dropdown-content">
                        <li><a><i onClick={() => { debugger;console.log('yo');chooseTeam(id) }} className="material-icons">add</i><span style={fontSize}>Add to My-Teams</span></a></li>
                        <li className="divider" tabIndex="-1"></li>
                        <li><a><i onClick={() => { checkStats(id) }} className="material-icons">arrow_forward</i><span style={fontSize}>Check Stats</span></a></li>
                    </ul>
                    </div>
                   
                </Fragment> */}