import React from 'react';

export default ({chooseTeam, id, api_key, team_full_name}) => {

    const replaceSpaceWithDash = (str) => {
        for (let i = 0; i < str.length; i++)
        {
            str = str.replace(" ", "-");
        }
        return str.toLowerCase();
    }

    const teamName = replaceSpaceWithDash(team_full_name);
    const teamLogo = require(`../../assets/images/${teamName}.png`);
    //had to change file name: 'los-angeles-clippers' to 'la-clippers'

    return (
        <div className="team-container col s6 m3">
            <button onClick={() => { chooseTeam(api_key) }} className="team-item waves-effect waves-light white">
                <img src={teamLogo}  />
            </button>
        </div>
    )
}
