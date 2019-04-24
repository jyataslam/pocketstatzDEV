import React, { Component, Fragment } from 'react';

class Team extends Component {

    componentDidMount(){

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
        // console.log("Team component props", this.props);
        const { image_url, chooseTeam, id, team_full_name } = this.props;
        
        return (
            <Fragment>
                <div className="team-container col s6 m3" >
                    <button className="team-item z-depth-3" onClick={() => { chooseTeam(id)}}>
                        <img src={`/dist/assets/${image_url}`} />
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default Team;

