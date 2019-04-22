import React from 'react';

export default ({chooseTeam, id, api_key}) => {

    return (
        <div className="team-container col s6 m3">
            <button onClick={() => { chooseTeam(id) }} className="team-item waves-effect waves-light grey">
                <span className="title">{api_key}</span>
            </button>
        </div>
    )
}
