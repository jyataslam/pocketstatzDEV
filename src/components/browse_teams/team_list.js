import React, { Component } from 'react';
import Team from './team';
import axios from 'axios';
import Button from './confirm_buttons';
import { ToastContainer, toast } from 'react-toastify';
import {connect} from 'react-redux';
import {teamList, loadStart, loadEnd} from "../../actions";
import LoadingScreen from "../loading_screen";

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

    async componentDidMount() {
        this.props.loadStart();
        await this.props.teamList(this.props);
        this.props.loadEnd();
    }

    componentWillUnmount() {
        this.props.loadStart();
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

        if(!this.props.isLoaded)
        {
            return <LoadingScreen />
        }
        else
        {
            const teamsList = this.props.teams.map((team) => {
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
                        <Button goToMyTeams={this.goToMyTeams} checkNumberOfSavedTeams={this.checkNumberOfSavedTeams} />
                        <div style={border}>
                            {teamsList}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state)
{
    return{
        isLoaded: state.loading.isLoaded,
        teams: state.listOfTeams.teams
    }
}

export default connect(mapStateToProps, {
    teamList, loadStart, loadEnd
})(TeamList);
