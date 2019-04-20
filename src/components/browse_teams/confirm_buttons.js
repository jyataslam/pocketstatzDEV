import React from 'react';

export default ({ confirm, back }) => {
    return (
        <div className="buttons center">
            <button onClick={back} className="btn btn-large orange darken-2 waves-effect waves-light">Back</button>
            <button onClick={confirm} className="btn btn-large orange darken-2 waves-effect waves-light">Home</button>
        </div>
    )
}