import React from 'react';

export default ({ chooseTeam, id, team_full_name, api_key }) => {

    return (
        <button onClick={() => {chooseTeam(id)}} className="collection-item btn btn-large grey team-from-list col s6 m6">
            <span className="title">{api_key}</span>
        </button>
    )
}
