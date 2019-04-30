import React, { Component } from 'react';

class DropDown extends Component {

    render() {
        const { goToMyTeams } = this.props;
        const margin = {"marginTop": "15px"};
        return (
            <button onClick={() => {goToMyTeams()}} style={margin} className="btn btn-small pulse green accent-4 col s12">Go To My Teams</button>
        )
    }
}

export default DropDown;