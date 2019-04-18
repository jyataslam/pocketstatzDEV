import React from 'react';

export default ({ handleClicked, teamName }) => {
    // deconstruct props from team-list and create each team here

    return (
        <li onClick={handleClicked} className="collection-item team-from-list center s12 m6 flow-text">
            {teamName}
        </li>
    )
}
