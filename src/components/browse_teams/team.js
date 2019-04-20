import React from 'react';

export default ({ colors, chooseTeam, id, team_full_name, team_code }) => {
    const backgroundColor = { 'background-color': `${colors}` };

    return (
        <div className="team-container col s6 m3">
            <button onClick={() => { chooseTeam(id) }} className="team-item waves-effect waves-light grey">
                <span className="title">{team_code}</span>
            </button>
        </div>
    )
}
