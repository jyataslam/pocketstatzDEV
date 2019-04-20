import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";


class BrowseSports extends Component {

    render() {
        const collectionStyle = { 'padding': '0' };

        return (
            <Fragment>
                <h3 className="center">Welcome to Recharge</h3>
                <h5 className="center">Choose the teams you want to follow.</h5>
                <div className="row">
                    <div style={collectionStyle} className="collection col s12 m4 offset-m4">
                        <Link href="#" to="/browse/nba" className="collection-item">NBA</Link>
                        <Link href="#" to="/overwatch" className="collection-item">Overwatch</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(BrowseSports);
