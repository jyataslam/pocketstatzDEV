import React, {Component, Fragment} from 'react';
import TeamScore from './team_score/team_score';
import TeamsTab from './teams_tab/teams_tab';
import PlayerStats from './players_stats/players_stats';

class GameInfo extends Component {

    state = {
        view: "left",
        team1: {
            teamName: "Lakers",
            teamPlayers: {
                player1: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player2: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player3: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player4: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player5: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player6: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player7: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player8: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player9: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player10: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player11: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player12: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player13: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player14: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player15: {
                    name: "Michael Jordan",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                }
    
            }

        },
        team2: {
            teamName: "Warriors",
            teamPlayers: {
                player1: {
                    name: "Lebron James",
                    points: 80,
                    triplePoints: 10,
                    rebounds: 10,
                    assists: 5,
                    steals: 15
                },
                player2: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player3: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player4: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player5: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player6: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player7: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player8: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player9: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player10: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player11: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player12: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player13: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player14: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                },
                player15: {
                    name: "Lebron James",
                    points: 100,
                    triplePoints: 18,
                    rebounds: 21,
                    assists: 40,
                    steals: 30
                }
    
            }

        }
       
    }   

    componentDidMount(){
        //make axios call for game stats and update state
    }

    showLeft = () => {
        this.setState({
            view: "left"
        });
    }

    showRight = () => {
        this.setState({
            view: "right"
        });
    }

    render(){
        const {view, team1, team2} = this.state;

        const {showLeft, showRight} = this;

        return(
            <Fragment>
                <TeamScore />   {/*pass in data from axios call as props*/}
                <TeamsTab showLeft={showLeft} showRight={showRight}/>
                <PlayerStats view={view} team1={team1} team2={team2}/>
            </Fragment>
            
        );
    }
}

export default GameInfo;