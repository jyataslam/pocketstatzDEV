import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import TeamButton from './team_button/team_button';
import EmptyHomepage from './empty_homepage';
import axios from 'axios';
import Swipeout from 'rc-swipeout';

import './home_team_list.scss';

class HomeTeamList extends Component {
    state = {
        userTeams: [],
        isLoaded: false,
    }

    componentDidMount() {
        this.getUserTeams();
    }

    async getUserTeams() {
        let localData = localStorage.homeTeamIds;
        if (localData === undefined) {
            return
        }
        const response = await axios.get("/api/list-user-teams.php", {
            params: {
                team_ids: localData
            }
        });
        this.setState({
            userTeams: response.data.user_teams,
            isLoaded: true
        });
    }

    deleteUserTeam = async (id) => {
        let localStorageArr = JSON.parse("[" + localStorage.getItem("homeTeamIds") + "]");
        var index = localStorageArr.indexOf(id);
        if (index > -1) {
            localStorageArr.splice(index, 1);
            if (localStorageArr.length === 0){
                localStorage.removeItem('homeTeamIds', index);
                this.setState({
                    userTeams: [],
                    isLoaded: false
                })
                return
            }
            localStorage.setItem('homeTeamIds', localStorageArr);
            let newTeamsStr = localStorageArr.toString();
            const response = await axios.get("/api/list-user-teams.php", {
                params: {
                    team_ids: newTeamsStr
                }
            });
            this.setState({
                userTeams: response.data.user_teams,
                isLoaded: true
            });
        } 
    }

    goToTeamStats = (teamID, leagueName) => {
        this.props.history.push(`/${leagueName}/${teamID}`);
    }

    goToBrowse = () => {
        this.props.history.push("/browse");
    }

    render() {
        console.log('home team render: ', this.state.userTeams);
        const { isLoaded, userTeams } = this.state;

        if (isLoaded && userTeams) {
            const homepageTeamList = this.state.userTeams.map((team) => {
                return (
                    <Swipeout
                        right={[
                            {
                                text: 'delete',
                                onPress: () => this.deleteUserTeam(team.id),
                                style: { backgroundColor: 'red', color: 'white' },
                                className: 'custom-class-2'
                            }
                        ]}
                        onOpen={() => console.log('open')}
                        onClose={() => console.log('closed')}
                        autoClose = 'true'
                    >
                        <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} />
                    </Swipeout>
                )
            });
            return (
                <ul>
                    {isLoaded && homepageTeamList}
                </ul>
            );
        } else if (!isLoaded) {
            return <EmptyHomepage goToBrowse={this.goToBrowse} />
        } 
    }
}

export default HomeTeamList;