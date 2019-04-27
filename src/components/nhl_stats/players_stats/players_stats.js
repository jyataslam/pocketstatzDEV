import React, { Component } from 'react';
import './nhl_players_stats.scss';

class PlayerStats extends Component {

    displayPlayersStats(team) {
        const { teamPlayers: {forwards, defensemen, goalies} } = team;

        var forwardsArray = Object.keys(forwards).map(function(key) {
            return forwards[key];
        });

        var defensemenArray = Object.keys(defensemen).map(function(key) {
            return defensemen[key];
        });

        var goaliesArray = Object.keys(goalies).map(function(key) {
            return goalies[key];
        });
        
        const forwardsStats = forwardsArray.map((player) => {
            return (
            <tr>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.shots}</td>
                <td>{player.shotPercentage}</td>
            </tr>
            )
        })

        const defensemenStats = defensemenArray.map((player) => {
            return (
            <tr>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.blockedShots}</td>
                <td>{player.hits}</td>
            </tr>
            )
        })

        const goaliesStats = goaliesArray.map((player) => {
            return (
            <tr>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.shotsAgainst}</td>
                <td>{player.goalsAgainst}</td>
                <td>{player.saves}</td>
                <td>{player.savePercentage}</td>
            </tr>
            )
        })
        
        return (
            <div className="players-table nhl-stats">
                <table className="striped">
                {/* maybe a divider on top? different color? let me know your thoughts */}
                <div class="divider nhl-divider"></div>
                    <thead id="stats-title">
                        <tr>
                            <th className="player-head-width">Forwards</th>
                            <th>POS</th>
                            <th>G</th>
                            <th>AST</th>
                            <th>S</th>
                            <th>S%</th>
                        </tr>
                    </thead>
                    <tbody>
                       {forwardsStats}
                    </tbody>
                    <div class="divider nhl-divider"></div>
                    <thead id="stats-title">
                        <tr>
                            <th className="player-head-width">Defense</th>
                            <th>POS</th>
                            <th>G</th>
                            <th>AST</th>
                            <th>BS</th>
                            <th>HT</th>
                        </tr>
                    </thead>
                    <tbody>
                       {defensemenStats}
                    </tbody>
                    <div class="divider nhl-divider"></div>
                    <thead id="stats-title">
                        <tr>
                            <th className="player-head-width">Goalies</th>
                            <th>POS</th>
                            <th>SA</th>
                            <th>GA</th>
                            <th>SV</th>
                            <th>SV%</th>
                        </tr>
                    </thead>
                    <tbody>
                       {goaliesStats}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        const { view, team1, team2 } = this.props;
        return (
            <div className="center" id="stats-container">
                {view === "left" ? this.displayPlayersStats(team1) : this.displayPlayersStats(team2)}
            </div>
        );
    }

}

export default PlayerStats;