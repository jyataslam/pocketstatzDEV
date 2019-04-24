import React, { Component, Fragment } from 'react';

class TeamSquare extends Component {

    componentDidMount() {
        M.Dropdown.init(this.dropdown);
    }

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
        const { chooseTeam, id, api_key, team_full_name, teamLogo } = this.props;
        const teamName = this.replaceSpaceWithDash(team_full_name);
        const teamLogoImage = require(`../../assets/${teamLogo}`);

            return (
                <Fragment>
                    <div className="team-container col s6 m3" >
                        <button ref={(element) => { this.dropdown = element }} className="team-item dropdown-trigger" data-target="dropdown1">
                            <img src={teamLogoImage} />
                        </button>
                    </div>
                    <ul  id="dropdown1" className="dropdown-content">
                        <li><a onClick={() => { chooseTeam(id) }}><i className="material-icons">add</i></a></li>
                        <li><a><i className="material-icons">cloud</i>five</a></li>
                    </ul>
                </Fragment>
            )
    }
}

export default TeamSquare;