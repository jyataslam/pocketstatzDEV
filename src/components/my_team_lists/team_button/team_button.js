import React from 'react';
import './team_button.scss';

export default (props) => {
    const { colors, team_full_name, team_id, id ,chooseTeam, league_name, isMobile, deleteTeam } = props;
    const backgroundColor = {'backgroundColor': `${colors}`};

        return(
            <div className="container">
                <div className="row">
                    <button onClick={() => {chooseTeam(id, league_name)}} style={backgroundColor} className="btn btn-large home-team-button col s12 m9 offset-m1">{team_full_name}</button>
                    {!isMobile && (
                        <button onClick={() => {deleteTeam(id)}} className="btn btn-large red col m1 offset-m1">X</button>
                    )}
                </div>
            </div>
        );
}
