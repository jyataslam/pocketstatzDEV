import React from 'react';

export default ({ confirm, back }) => {
    return (
        <div className="buttons">
            <button onClick={back} className="btn btn-large orange darken-2 col s6">Back To Sports</button>
            <button onClick={confirm} className="btn btn-large orange darken-2 col s6">Go To Home</button>
        </div>
    )
}