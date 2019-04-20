import React from 'react';

export default ({ colors, chooseTeam, id, team_full_name, team_code }) => {
    const backgroundColor = {'background-color':`${colors}`};

    return (
        <button onClick={() => {chooseTeam(id)}} className="collection-item btn btn-large grey team-from-list col s6 m6">
            <span className="title">{team_code}</span>
        </button>
    )
}
