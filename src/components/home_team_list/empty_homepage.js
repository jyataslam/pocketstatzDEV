import React, { Fragment } from 'react';

export default ({ goToBrowse }) => {
    return (
        <Fragment>
        <div className="link-container">
            <i id="symbol" onClick={goToBrowse} class="material-icons valign-wrapper">add_circle</i>
        </div>
        <p className="content-text main-text" onClick={goToBrowse}>Click Here To Add Teams To Your Home Page</p>
        </Fragment>
    )
}