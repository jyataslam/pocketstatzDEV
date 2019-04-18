import React, { Component } from 'react';
import Nav from './nav';
import { Route, Switch } from 'react-router-dom';
import BrowseSports from './browse_sports';
import BrowseRoutes from './browse_teams/index';
import HomeTeamList from './home_team_list';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';


class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <Switch>
                        {/* import Routing and Loading/Home page here */}
                        <Route path="/nba-team-list" component={BrowseRoutes} />
                        <Route path="/user-home" component={HomeTeamList} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
