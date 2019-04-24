import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './sidenav';
import './nav.scss';

class Nav extends Component {
    
    renderLinks(){
        return (
            <Fragment>
                <button className="sidenav-close right hide-on-med-and-up">
                    <i className="material-icons">close</i>
                </button>
                <li className="first-li sidenav-close">
                    <Link to="/my-teams">My Teams</Link>
                </li>
                <li><div className="divider red"></div></li>
                <li className="sidenav-close">
                    <Link to="/browse">Browse</Link>
                </li>
                <li><div className="divider red"></div></li>
                <li className="sidenav-close">
                    <Link to="/log-in">Log In</Link>
                </li>
                <li><div className="divider red"></div></li>
                <li className="sidenav-close">
                    <Link to="/about">About Us</Link>
                </li>
            </Fragment>
        )
    }

    render(){
        const links = this.renderLinks();
        const headerColor = {'backgroundColor': '#B9B9B9'};

        return (
            <Fragment>
                <nav style={headerColor} className="nav-head">
                    <div className="nav-wrapper">
                        <span className="header-text brand-logo" >Pocket Statz</span>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down desktop-nav">
                            {links}
                        </ul>
                    </div>
                    <Sidenav links={links} />
                </nav>
            </Fragment>
        )
    }
}

export default Nav;
