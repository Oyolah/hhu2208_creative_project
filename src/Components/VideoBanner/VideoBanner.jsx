import React from "react";
import videoBg from "../../assets/videobg.mp4";

const VideoBanner = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>Welcome</h1>
                <p>To my site.</p>
            </div>
        </div>
    );
};

export default VideoBanner;
