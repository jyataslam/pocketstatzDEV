import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './browse_sports.scss';


class BrowseSports extends Component {

    render() {
        const collectionStyle = { 'padding': '0', 'border': 'none'};

        return (
            <Fragment>
                <h4 className="center header-text">Choose the teams you want to follow.</h4>
                <div className="row">
                    <div style={collectionStyle} className="collection col s12 m4 offset-m4">
                        <Link href="#" to="/browse/nba" className="grey lighten-2 collection-item">NBA</Link>
                        <br/>
                        <Link href="#" to="/browse/nhl" className="grey lighten-2 collection-item">NHL</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(BrowseSports);
