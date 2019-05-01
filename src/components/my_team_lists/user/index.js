import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import TeamButton from '../team_button/team_button';
import EmptyHomepage from '../empty_homepage';
import axios from 'axios';
import Swipeout from 'rc-swipeout';

import '../my_team_lists.scss';

class UserTeamList extends Component {
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
        this.getSignedInUserTeams();
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

    async getSignedInUserTeams(userId){
        const resp = await axios.get(`/api/gethomepageteams.php?user_id=${userId}`);
        console.log("response from db is:", resp);

        this.setState({
            userTeams: resp.data.homepage_items,
            isLoaded: true
        });
    }

    // deleteGuestOrSignedInTeam = async (teamId) => {
    //     const resp = await axios.get(`/api/login-status.php`);
    //     const {success} = resp.data;

    //     if(success)
    //     {
    //         this.deleteSignedInUserTeam(teamId);
    //     }
    //     else
    //     {
    //         this.deleteGuestUserTeam(teamId)
    //     }
    // }

    deleteSignedInUserTeam = async (targetTeamId) => {
        const resp = await axios.get(`/api/delete-user-team.php?team_id=${targetTeamId}`)
        console.log("delete signed in user response:", resp);
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

    goToTeamStats = (teamID, leagueName) => {
        this.props.history.push(`/${leagueName}/${teamID}`);
    }

    goToBrowse = () => {
        this.props.history.push("/browse");
    }

    render() {
        const { isLoaded, userTeams } = this.state;

        if (isLoaded && userTeams) {
            const homepageTeamList = userTeams.map((team) => {

                return (
                    <Swipeout
                        right={[
                            {
                                text: 'delete',
                                onPress: () => this.deleteSignedInUserTeam(team.team_id),
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
        } 
        return <EmptyHomepage goToBrowse={this.goToBrowse} />

    }
}

export default UserTeamList;