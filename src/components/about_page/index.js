import React, { Component } from 'react';
import './about.scss'

class About extends Component {
    render() {
        return (
            <div className="row center">
                <div className="col s12 m6 l3 team-card">
                    <img src="https://via.placeholder.com/300"></img><br></br>
                    <h3>Jason</h3>
                    <div>
                        <i class="material-icons team-link" title="GITHUB">code</i> <i class="material-icons team-link" title="LINKEDIN">group</i> <i class="material-icons team-link" title="PORTFOLIO">collections</i>
                    </div>
                </div>
                <div className="col s12 m6 l3 team-card">
                    <img src="https://via.placeholder.com/300"></img><br></br>
                    <h3>Joe</h3>
                    <div>
                        <i class="material-icons team-link" title="GITHUB">code</i> <i class="material-icons team-link" title="LINKEDIN">group</i> <i class="material-icons team-link" title="PORTFOLIO">collections</i>
                    </div>
                </div>
                <div className="col s12 m6 l3 team-card">
                    <img src="https://via.placeholder.com/300"></img><br></br>
                    <h3>Chris</h3>
                    <div>
                        <i class="material-icons team-link" title="GITHUB">code</i> <i class="material-icons team-link" title="LINKEDIN">group</i> <i class="material-icons team-link" title="PORTFOLIO">collections</i>
                    </div>
                </div>
                <div className="col s12 m6 l3 team-card">
                    <img src="https://via.placeholder.com/300"></img><br></br>
                    <h3>Michelle</h3>
                    <div>
                        <i class="material-icons team-link" title="GITHUB">code</i> <i class="material-icons team-link" title="LINKEDIN">group</i> <i class="material-icons team-link" title="PORTFOLIO">collections</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;