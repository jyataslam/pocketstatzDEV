import React, { Component, Fragment } from 'react';
import LoadingScreen from '../../loading_screen';
import TeamButton from '../team_button/team_button';
import EmptyHomepage from '../empty_homepage';
import axios from 'axios';
import Swipeout from 'rc-swipeout';
import '../my_team_lists.scss';

class UserTeamList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userTeams: null,
            isMobile: false
        }

        window.addEventListener('resize', this.checkScreenWidth);
    }

    async componentDidMount() {
        await this.getSignedInUserTeams();
        this.onLoadCheckScreenWidth();
    }

    checkScreenWidth = (event) => {
        const { outerWidth } = event.target;
        let mobile = outerWidth < 601 ? true : false;

        this.setState({
            isMobile: mobile
        })
    }

    onLoadCheckScreenWidth() {
        let mobile = outerWidth < 601 ? true : false;

        this.setState({
            isMobile: mobile
        })
    }

    async getSignedInUserTeams(userId) {
        const resp = await axios.get(`/api/gethomepageteams.php?user_id=${userId}`);
        console.log("response from db is:", resp);

        this.setState({
            userTeams: resp.data.homepage_items
        });
    }

    deleteSignedInUserTeam = async (targetTeamId) => {
        console.log('delete id', targetTeamId)
        const resp = await axios.get(`/api/delete-user-team.php?team_id=${targetTeamId}`);
        const newTeamsArray = [...this.state.userTeams];

        if (resp.data.success) {
            this.setState({
                userTeams: newTeamsArray.filter((team) => {
                    return team.team_id !== targetTeamId;
                })
            });
        }
        else {
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
        const { userTeams, isMobile } = this.state;
        if (!userTeams) {
            return <LoadingScreen />
        } else if (userTeams.length) {
            const homepageTeamList = userTeams.map((team) => {
                if (isMobile) {
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
                            autoClose='true'
                        >
                            <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} isMobile={isMobile} />
                        </Swipeout>
                    )
                }
                return (
                    <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} isMobile={isMobile} deleteTeam={this.deleteSignedInUserTeam} />
                );
            });

            return (
                <ul>
                    {homepageTeamList}
                </ul>
            );
        }
        return <EmptyHomepage goToBrowse={this.goToBrowse} />
    }
}

export default UserTeamList;