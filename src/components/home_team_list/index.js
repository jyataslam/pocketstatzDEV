import React, {Component} from 'react';
import TeamButton from './team_button/team_button';
class HomeTeamList extends Component {

    //Make axios call to get teams from table here

    render(){
        return(
                <ul>
                    <TeamButton teamName="Lakers"/> {/* Pass in team names as props */}
                    <TeamButton teamName="Warriors"/> {/* Pass in team names as props */}
                    <TeamButton teamName="Celtics"/> {/* Pass in team names as props */}
                </ul>
        );
    }
}

export default HomeTeamList;