import React, { Component } from 'react';
import Team from './team';
import axios from 'axios';
import Button from './confirm_buttons';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class TeamList extends Component {
    state = {
        isLoaded: false,
        teams: null,
        selectedTeams: []
    }

    //the function that pops up for the toast
    notify = async () => toast.error('Guest limit reached. Please log in or sign up to add more teams to your list.', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });

    componentDidMount() {
        this.getTeams();
    }

    chooseTeam = (id) => {
        const { selectedTeams } = this.state;
        if (selectedTeams.includes(id)) {
            return
        } else {
            this.setState({
                selectedTeams: [...selectedTeams, id]
            });
        }
    }

    checkNumberOfSavedTeams = () => {
        if (localStorage.getItem("homeTeamIds") !== null) {
            let savedTeams = JSON.parse("[" + localStorage.getItem("homeTeamIds") + "]");
            if (savedTeams.length > 3) {
                console.log('user has three teams');
            }
        }
    }

    async getTeams() {
        const response = await axios.get(`/api/getteam.php?sport_name=${this.props.leagueName}`);

        if (response.data.success) {
            this.setState({
                isLoaded: true,
                teams: response.data.teams
            });
        }
    }

    goToMyTeams = async () => {
        const sendTeamIds = this.state.selectedTeams.toString();
        const homeTeamsResponse = await axios.get("/api/list-user-teams.php", {
            params: {
                team_ids: sendTeamIds
            }
        });

        let homeTeamsIds = [];

        if (localStorage.getItem("homeTeamIds") !== null) {
            homeTeamsIds = JSON.parse("[" + localStorage.getItem("homeTeamIds") + "]");
        }


        for (var index = 0; index < homeTeamsResponse.data.user_teams.length; index++) {
            homeTeamsIds.push(homeTeamsResponse.data.user_teams[index].id);

            if (localStorage.getItem("homeTeamIds") === null) {
                localStorage.setItem("homeTeamIds", homeTeamsIds);
            }
        }

        //if their array is longer than three teams and they're not signed in, it'll cut them off at three and trigger the toast
        if (homeTeamsIds.length > 3) {
            homeTeamsIds.length = 3;
            this.notify();
        } else {
            localStorage.homeTeamIds = homeTeamsIds.toString();
            this.props.history.push(`/my-teams`);
        }
    }

    checkStats = (id) => {
        this.props.history.push(`/${this.props.leagueName}/${id}`);
    }

    render() {
        if (this.state.isLoaded) {
            const teamList = this.state.teams.map((team) => {
                return <Team key={team.id} {...team} chooseTeam={this.chooseTeam} checkStats={this.checkStats} />
            });

            const { selectedTeams } = this.state;
            const border = { "border": "none" };

            return (
                <div className="team-list row">
                    <div className="container row">
                        <div>
                            <ToastContainer
                                position="top-right"
                                autoClose={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnVisibilityChange
                                draggable
                            />
                        </div>
                        <Button goToMyTeams={this.goToMyTeams} checkNumberOfSavedTeams={this.checkNumberOfSavedTeams} />
                        <div style={border}>
                            {teamList}
                        </div>
                    </div>
                </div>
            )
        }
        return (null);
    }
}

export default TeamList;
