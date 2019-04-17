import React, { Component } from 'react';
import Nav from './nav';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
            </div>
        )
    }
}

export default App;
