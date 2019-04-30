import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import TeamButton from './team_button/team_button';
import EmptyHomepage from './empty_homepage';
import axios from 'axios';
import Swipeout from 'rc-swipeout';

import './home_team_list.scss';

class HomeTeamList extends Component {
    constructor(props) {
        super(props);

        window.addEventListener('resize', this.checkScreenWidth);
    }

    state = {
        userTeams: [],
        isLoaded: false,
        isMobile: false
    }

    componentDidMount() {
        this.checkUserLoggedIn();
        this.onLoadCheckScreenWidth();
    }

    checkScreenWidth = (event) => {
        const { outerWidth } = event.target;
        let mobile = outerWidth < 601 ? true : false;
    
        this.setState({
            isMobile: mobile
        })
    }

    onLoadCheckScreenWidth(){
        let mobile = outerWidth < 601 ? true : false;
    
        this.setState({
            isMobile: mobile
        })
    }

    async getGuestUserTeams() {
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

    async getSignedInUserTeams(userId){
        const resp = await axios.get(`/api/gethomepageteams.php?user_id=${userId}`);

        this.setState({
            userTeams: resp.data.homepage_items,
            isLoaded: true
        });
    }

    async checkUserLoggedIn(){
        const resp = await axios.get(`/api/login-status.php`);
        
        const {success, user_id} = resp.data; 
        if(success)
        {
            this.getSignedInUserTeams(user_id)
        }
        else{
            this.getGuestUserTeams();
        }
    }

    deleteGuestOrSignedInTeam = async (teamId) => {
        const resp = await axios.get(`/api/login-status.php`);
        const {success} = resp.data;

        if(success)
        {
            this.deleteSignedInUserTeam(teamId);
        }
        else
        {
            this.deleteGuestUserTeam(teamId)
        }
    }

    deleteSignedInUserTeam = async (targetTeamId) => {
        const resp = await axios.get(`/api/delete-user-team.php?team_id=${targetTeamId}`);
        const newTeamsArray = [...this.state.userTeams];

        if(resp.data.success)
        {
            this.setState({
                userTeams: newTeamsArray.filter((team) => {
                    return team.team_id !== targetTeamId;
                })
            });
        }
        else
        {
            console.log(resp.error);
        }
    }

    deleteGuestUserTeam = async (id) => {
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
        const { isLoaded, userTeams, isMobile } = this.state;

        if (isLoaded && userTeams) {
            const homepageTeamList = userTeams.map((team) => {
                if (isMobile) {
                    return (
                        <Swipeout
                            right={[
                                {
                                    text: 'delete',
                                    onPress: () => this.deleteGuestOrSignedInTeam(team.team_id || team.id),
                                    style: { backgroundColor: 'red', color: 'white' },
                                    className: 'custom-class-2'
                                }
                            ]}
                            onOpen={() => console.log('open')}
                            onClose={() => console.log('closed')}
                            autoClose = 'true'
                        >
                            <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} isMobile={isMobile}/>
                        </Swipeout>
                    )
                }
                return (
                    <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} isMobile={isMobile} deleteTeam={this.deleteGuestOrSignedInTeam}/>
                );
            });

            return (
                <ul>
                    {isLoaded && homepageTeamList}
                </ul>
            );
        } 
        return <EmptyHomepage goToBrowse={this.goToBrowse} />

    }
}

export default HomeTeamList;