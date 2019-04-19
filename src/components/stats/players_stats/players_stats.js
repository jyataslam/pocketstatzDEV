import React, {Component} from 'react';
import './players_stats.scss';

class PlayerStats extends Component {   

    displayPlayersStats(team){
        const {teamName, teamPlayers} = team;
        const {player1, player2, player3, player4, player5, player6, player7,
                player8, player9, player10, player11, player12, player13,
                player14,player15} = teamPlayers;
        return(   
            <div className="players-table">
                <div className="center">{teamName} Player Stats</div>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>PTS</th>
                            <th>3PTS</th>
                            <th>RBS</th>
                            <th>AST</th>
                            <th>STL</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{player1.name}</td>
                            <td>{player1.points}</td>
                            <td>{player1.triplePoints}</td>
                            <td>{player1.rebounds}</td>
                            <td>{player1.assists}</td>
                            <td>{player1.steals}</td>
                        </tr>
                        <tr>
                            <td>{player2.name}</td>
                            <td>{player2.points}</td>
                            <td>{player2.triplePoints}</td>
                            <td>{player2.rebounds}</td>
                            <td>{player2.assists}</td>
                            <td>{player2.steals}</td>
                        </tr>
                        <tr>
                            <td>{player3.name}</td>
                            <td>{player3.points}</td>
                            <td>{player3.triplePoints}</td>
                            <td>{player3.rebounds}</td>
                            <td>{player3.assists}</td>
                            <td>{player3.steals}</td>
                        </tr>
                        <tr>
                            <td>{player4.name}</td>
                            <td>{player4.points}</td>
                            <td>{player4.triplePoints}</td>
                            <td>{player4.rebounds}</td>
                            <td>{player4.assists}</td>
                            <td>{player4.steals}</td>
                        </tr>
                        <tr>
                            <td>{player5.name}</td>
                            <td>{player5.points}</td>
                            <td>{player5.triplePoints}</td>
                            <td>{player5.rebounds}</td>
                            <td>{player5.assists}</td>
                            <td>{player5.steals}</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Michael Jordan</td>
                            <td>100</td>
                            <td>18</td>
                            <td>21</td>
                            <td>40</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    render(){
        const {view, team1, team2} = this.props;
        return(
            <h1 className="center">
                {view === "left" ? this.displayPlayersStats(team1) : this.displayPlayersStats(team2)}
            </h1>
        );
    }

}

export default PlayerStats;