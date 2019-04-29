import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { teamList } from "../../actions";

class Team extends Component {
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
        const { image_url, chooseTeam, id, selected } = this.props;

        if (selected) {
            return (
                <Fragment>
                    <div className="team-container col s6 m3" >
                        <button className="team-item-clicked z-depth-3" onClick={() => { chooseTeam(id) }}>
                            <img src={`/dist/assets/${image_url}`} />
                        </button>
                    </div>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <div className="team-container col s6 m3" >
                    <button className="team-item z-depth-3" onClick={() => { chooseTeam(id) }}>
                        <img src={`/dist/assets/${image_url}`} />
                    </button>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        clicked: state.listOfTeams.clicked
    }
}

export default connect(mapStateToProps, {
    teamList
})(Team);

