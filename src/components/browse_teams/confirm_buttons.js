import React, { Component } from 'react';

class DropDown extends Component {

    render() {
        const { checkUserLoggedIn } = this.props;
        const margin = {"marginTop": "15px"};
        return (
            <button onClick={() => {checkUserLoggedIn()}} style={margin} className="btn btn-small pulse red col s12">Go To My Teams</button>
        )
    }
}

export default DropDown;