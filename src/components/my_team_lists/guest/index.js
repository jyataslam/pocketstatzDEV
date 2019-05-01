import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { checkAuth } from '../../../actions';
import TeamButton from '../team_button/team_button';
import EmptyHomepage from '../empty_homepage';
import axios from 'axios';
import Swipeout from 'rc-swipeout';

import '../my_team_lists.scss';


class GuestTeamList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userTeams: [],
            isLoaded: false,
            isMobile: false
        }

        window.addEventListener('resize', this.checkScreenWidth);
    }
    

    async componentDidMount() {
        this.getGuestUserTeams();
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
                                    onPress: () => this.deleteGuestUserTeam(team.id),
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

export default GuestTeamList;