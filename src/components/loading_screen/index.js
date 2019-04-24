import React from "react";
import LoadingImage from "../../../public/dist/assets/images/loading_images/dark-theme-loading.gif";

export default props => {
    return(
        <div className="center">
            <img src={LoadingImage} alt="loading_image"/>
            <div>Loading...</div>
        </div>
    );
}