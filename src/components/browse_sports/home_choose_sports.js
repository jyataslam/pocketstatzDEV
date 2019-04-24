import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import './browse_sports.scss';


class BrowseSports extends Component {

    render() {
        const collectionStyle = { 'padding': '0', 'border': 'none' };

        return (
            <Fragment>
                <h4 className="center header-text">Choose A Sport</h4>
                <div className="container">
                    <div className="row">
                        <div style={collectionStyle} className=" col s12 m4 offset-m4">
                            <Link href="#" to="/browse/nba" className="btn btn-large grey col s12 m4">NBA</Link>
                            <Link href="#" to="/browse/nhl" className="btn btn-large grey darken-1 col s12 m4 offset-m4">NHL</Link>
                            <Link href="#" to="/browse/overwatch" className="btn btn-large grey darken-2 col s12 m4">Overwatch</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(BrowseSports);
