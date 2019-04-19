import React, {Component} from 'react';


class TeamsTab extends Component {
 
    render(){
        return(
            <div className="container">
                <div className="row">
                        <button className="btn col s6" onClick={this.props.showLeft}>LAL</button>
                        <button className="btn col s6" onClick={this.props.showRight}>GSW</button>
                </div>
            </div>
        );
    }
}

export default TeamsTab;