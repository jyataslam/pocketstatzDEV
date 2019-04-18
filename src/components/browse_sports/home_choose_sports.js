import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


class BrowseSports extends Component {
    goToNbaTeamList = () => {
        this.props.history.push('/nba-team-list');
    }

    render() {
        const collectionStyle = { 'padding': '0' };

        return (
            <Fragment>
                <h3 className="center">Welcome to Recharge</h3>
                <h5 className="center">Choose the teams you want to follow.</h5>
                <div className="row">
                    <div style={collectionStyle} className="collection col s12 m4 offset-m4">
                        {/* For collection items, href needs correct address */}
                        <a href="#" onClick={this.goToNbaTeamList} className="collection-item">NBA</a>
                        <a href="#" className="collection-item">Overwatch</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(BrowseSports);
