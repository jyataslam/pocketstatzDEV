import React, { Component } from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';
import BrowseSports from './browse_sports';
import BrowseNba from './browse_teams/index';
import BrowseNhl from './browse_teams/index';
import UserTeamList from './my_team_lists/user';
import GuestTeamList from './my_team_lists/guest';
import NavFooter from './nav/nav_footer';
import LandingPage from "./landing_page";
import LoadingScreen from "./loading_screen";
import About from './about_page';
import AccountRoutes from "./account";

import auth from '../hoc/auth';
import { checkAuth } from '../actions';
import { connect } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';


class App extends Component {
    async componentDidMount() {
        this.props.checkAuth();
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container" id="landing-container">
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/browse" render={(routingProps) => {
                            return <BrowseSports {...routingProps} />
                        }} />
                        <Route path="/user-teams" component={auth(UserTeamList, '/guest-teams', true)} />
                        <Route path="/guest-teams" component={GuestTeamList} />
                        <Route path="/nba" component={BrowseNba} />
                        <Route path="/nhl" component={BrowseNhl} />
                        <Route path="/about" component={About} />
                        <Route path="/account" component={AccountRoutes} />
                    </Switch>
                </div>
                <div className="navbar-fixed">
                    <NavFooter />
                </div>
            </div>
        )
    }
}

export default connect(null, {
    checkAuth
})(App);
