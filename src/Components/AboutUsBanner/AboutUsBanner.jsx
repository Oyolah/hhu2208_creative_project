// Banner.js
import React from "react";

const Banner = ({ backgroundImage, title, subtitle }) => {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "35rem",
    };

    return (
        <section
            className="flex items-center justify-center"
            style={bannerStyle}
        >
            <div className="text-white text-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg">{subtitle}</p>
                {/* Add other content or call-to-action buttons */}
            </div>
        </section>
    );
};

export default Banner;
