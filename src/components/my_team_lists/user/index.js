import React, { Component, Fragment } from 'react';
import LoadingScreen from '../../loading_screen';
import TeamButton from '../team_button/team_button';
import EmptyHomepage from '../empty_homepage';
import axios from 'axios';
import Swipeout from 'rc-swipeout';
import '../my_team_lists.scss';
import { connect } from 'react-redux';
import { getUserTeams, deleteUserTeam } from '../../../actions';

class UserTeamList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobile: false,
            userTeams: null
        }

        window.addEventListener('resize', this.checkScreenWidth);
    }

    async componentDidMount() {
        await this.props.getUserTeams();
        this.onLoadCheckScreenWidth();
    }

    checkScreenWidth = (event) => {
        const { outerWidth } = event.target;
        let mobile = outerWidth < 601 ? true : false;

        this.setState({
            isMobile: mobile
        })
    }

    handleDeleteTeam = async (id) => {
        await this.props.deleteUserTeam(id)
        this.props.getUserTeams();
    }

    onLoadCheckScreenWidth() {
        let mobile = outerWidth < 601 ? true : false;

        this.setState({
            isMobile: mobile
        })
    }

    goToTeamStats = (teamID, leagueName) => {
        this.props.history.push(`/${leagueName}/${teamID}`);
    }

    goToBrowse = () => {
        this.props.history.push("/browse");
    }

    render() {
        const { userTeams, isMobile } = this.props;
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
                                    onPress: () => {
                                        this.handleDeleteTeam(team.team_id)
                                    },
                                    style: { backgroundColor: 'red', color: 'white' },
                                    className: 'custom-class-2'
                                }
                            ]}
                            autoClose='true'
                        >
                            <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} deleteTeam={this.props.deleteUserTeam} isMobile={isMobile} />
                        </Swipeout>
                    )
                }
                return (
                    <TeamButton key={team.id} {...team} chooseTeam={this.goToTeamStats} isMobile={isMobile} deleteTeam={this.handleDeleteTeam} />
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

function mapStateToProps(state){
    return{
        userTeams: state.userTeams.userTeams
    }
}

export default connect(mapStateToProps, {
    getUserTeams, deleteUserTeam
})(UserTeamList);