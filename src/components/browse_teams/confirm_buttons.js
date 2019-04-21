import React from 'react';

export default ({ confirm, back }) => {
    return (
        <div className="buttons">
            <button onClick={back} className="btn btn-large orange darken-2 waves-effect waves-light"><i className="material-icons small">arrow_back</i></button>
            <button onClick={confirm} className="btn btn-large orange darken-2 waves-effect waves-light"><i className="material-icons small">home</i></button>
        </div>
    )
}