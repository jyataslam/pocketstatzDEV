import React, { Component, Fragment } from 'react';
import GameScore from './game_score/game_score';
import TeamsTab from './teams_tab/teams_tab';
import PlayerStats from './players_stats/players_stats';
import { connect } from "react-redux";
import { nhlGameInfo, loadStart, loadEnd } from "../../actions";
import LoadingScreen from "../loading_screen";


class GameInfo extends Component {

    state = {
        view: "left",
        isLoaded: false,
        team1: null,
        team2: null,
        gameDetails: null
    }

    async componentDidMount() {
        this.props.loadStart();
        await this.props.nhlGameInfo(this.props);
        this.props.loadEnd();
    }

    componentWillUnmount() {
        this.props.loadStart();
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

    render() {
        console.log('game props', this.props);
        const { view, gameStats} = this.props;
        const { team1, team2 } = gameStats;
        const { showLeft, showRight } = this;
        console.log('team 1', team1);

        if (!this.props.isLoaded) {
            return <LoadingScreen />
        }

        return (
            <Fragment>
                {<GameScore team1={team1} team2={team2} gameDetails={gameStats} />}
                {<TeamsTab team1={team1} team2={team2} showLeft={showLeft} showRight={showRight} />}
                {<PlayerStats view={view} team1={team1} team2={team2} />}
            </Fragment>

        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        isLoaded: state.loading.isLoaded,
        gameStats: state.stats
    }
}

export default connect(mapStateToProps, { nhlGameInfo, loadStart, loadEnd })(GameInfo);