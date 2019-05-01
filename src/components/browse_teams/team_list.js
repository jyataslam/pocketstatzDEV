import React, { Component } from 'react';
import Team from './team';
import axios from 'axios';
import Button from './confirm_buttons';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { teamList, loadStart, loadEnd } from "../../actions";
import LoadingScreen from "../loading_screen";

import 'react-toastify/dist/ReactToastify.css';

class TeamList extends Component {
    state = {
        teams: null,
        selectedTeams: []
    }

    notify = async () => toast.error('Please log in or sign up to add more than three teams to your list.', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });

    alert = async () => toast.warn('Warning: You already have three teams saved. Please log in or sign up to save more.', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });

    async componentDidMount() {
        this.props.loadStart();
        await this.props.teamList(this.props);
        this.props.loadEnd();

        //triggers the warning toast if they already have three teams saved when they visit the page
        if (localStorage.getItem("homeTeamIds") !== null) {
            let currentHomeTeams = JSON.parse("[" + localStorage.getItem("homeTeamIds") + "]");
            if (currentHomeTeams.length === 3) {
                console.log(currentHomeTeams);
                this.alert();
            }
        }
    }

    componentWillUnmount() {
        this.props.loadStart();
    }

    chooseTeam = (id) => {
        const { selectedTeams } = this.state;
        if (selectedTeams.includes(id)) {
            const teamsArray = [...this.state.selectedTeams];
            const index = teamsArray.indexOf(id);
            teamsArray.splice(index, 1);
            this.setState({
                selectedTeams: teamsArray,
                clicked: false
            });
        } else {
            this.setState({
                selectedTeams: [...selectedTeams, id],
                clicked: true
            });
        }
    }

    checkUserLoggedIn = async () => {
        const resp = await axios.get(`/api/login-status.php`);
        console.log("user logged in? resp:", resp);
        const {success, user_id} = resp.data; 
        if(success)
        {
            this.goToMyTeamsSignedInUser(user_id);
        }
        else{
            this.goToMyTeamsGuest();
        }
    }

    goToMyTeamsSignedInUser = async (userId) => { 
        const sendTeamIds = this.state.selectedTeams.toString();

        await axios.get(`/api/addteam.php?user_id=${userId}&team_id=${sendTeamIds}`);
        this.props.history.push(`/user-teams`);
    }

    goToMyTeamsGuest = async () => {
        const sendTeamIds = this.state.selectedTeams.toString();
        const homeTeamsResponse = await axios.get("/api/list-user-teams.php", {
            params: {
                team_ids: sendTeamIds
            }
        });

        let homeTeamsIds = [];
        let currentLength = null;

        if (localStorage.getItem("homeTeamIds") !== null) {
            homeTeamsIds = JSON.parse("[" + localStorage.getItem("homeTeamIds") + "]");
            currentLength = homeTeamsIds.length;
        }

        for (var index = 0; index < homeTeamsResponse.data.user_teams.length; index++) {
            //prevents the user from adding duplicate teams
            if(!homeTeamsIds.includes(homeTeamsResponse.data.user_teams[index].id)){
                homeTeamsIds.push(homeTeamsResponse.data.user_teams[index].id);
            }
            if (localStorage.getItem("homeTeamIds") === null) {
                localStorage.setItem("homeTeamIds", homeTeamsIds);
            }
        }

        //if their array is longer than three teams and they're not signed in, it'll cut them off at three and trigger the toast
        if (homeTeamsIds.length > 3) {
            this.notify();
            homeTeamsIds.length = currentLength;
        } else {
            localStorage.homeTeamIds = homeTeamsIds.toString();
            this.props.history.push(`/user-teams`);
        }
    }

    checkStats = (id) => {
        this.props.history.push(`/${this.props.leagueName}/${id}`);
    }

    render() {
        if (!this.props.teams) {
            return <LoadingScreen />
        }
        console.log(this.state.selectedTeams);
        const teamsList = this.props.teams.map((team) => {
            if (this.state.selectedTeams.includes(team.id)) {
                return <Team key={team.id} {...team} chooseTeam={this.chooseTeam} checkStats={this.checkStats} selected={true} />
            }
            return <Team key={team.id} {...team} chooseTeam={this.chooseTeam} checkStats={this.checkStats} />
        });
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
                    <Button checkUserLoggedIn={this.checkUserLoggedIn} checkNumberOfSavedTeams={this.checkNumberOfSavedTeams} />
                    <div style={border}>
                        {teamsList}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        teams: state.listOfTeams.teams,
        clicked: state.listOfTeams.clicked
    }
}

export default connect(mapStateToProps, {
    teamList, loadStart, loadEnd
})(TeamList);
