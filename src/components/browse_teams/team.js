import React from 'react';

export default ({chooseTeam, id, team_full_name}) => {

    const replaceSpaceWithDash = (str) => {
        let newStr = "";

        for (let i = 0; i < str.length; i++)
        {
            if (str[i] === " ")
            {
                newStr += "-";
            }
            else
            {
                newStr = newStr + str[i];
            }
        }
        return newStr.toLowerCase();
    }

    const teamName = replaceSpaceWithDash(team_full_name);
    const teamLogo = require(`../../assets/images/${teamName}.png`);
    //had to change file name: 'los-angeles-clippers' to 'la-clippers'

    return (
        <div className="team-container col s6 m3">
            <button onClick={() => { chooseTeam(id) }} className="team-item waves-effect waves-light white">
                <img src={teamLogo}  />
            </button>
        </div>
    )
}
