import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './sidenav';
import './nav.scss';

class Nav extends Component {
    renderLinks(){
        // ask Andy how to avoid these inline styles
        const style = {
            "margin": "60px 0 0 0"
        }
        const line = {
            "margin": "0 0 0 20px"
        }

        return (
            <Fragment>
                <button className="sidenav-close right hide-on-med-and-up">
                    <i className="material-icons">close</i>
                </button>
                <li style={style}>
                    <Link to="/">Home</Link>
                </li>
                <li><div style={line} className="divider red"></div></li>
                <li>
                    <Link to="/browse">Browse</Link>
                </li>
                <li><div style={line} className="divider red"></div></li>
                <li>
                    <Link to="/log-in">Log In</Link>
                </li>
                <li><div style={line} className="divider red"></div></li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
            </Fragment>
        )
    }

    render(){
        const links = this.renderLinks();
        const header = {
            "height": "80px"
        }

        return (
            <Fragment>
                <nav style={header}>
                    <div className="nav-wrapper">
                        <p className="header-text center">Recharge</p>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
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