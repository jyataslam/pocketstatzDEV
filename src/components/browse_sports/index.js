
import React, {Component, Fragment} from 'react';
import './browse_sports.scss';

class BrowseSports extends Component {
    render() {
        const collectionStyle = {'padding': '0'};

        return (
            <Fragment>
                <h3 className="center">Welcome to Recharge</h3>
                <h5 className="center">Choose the teams you want to follow.</h5>
                <div className="row">
                    <div style={collectionStyle} className="collection col s12 m4 offset-m4">
                        {/* For collection items, href needs correct address */}
                        <a href="#" className="collection-item">NBA</a>
                        <a href="#" className="collection-item">Overwatch</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BrowseSports;
