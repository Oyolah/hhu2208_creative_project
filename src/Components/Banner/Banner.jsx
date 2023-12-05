// Banner.js
import React from "react";
import bannerImage from "../../assets/benjamin-disinger-2xzEIQFzw0g-unsplash.jpg"; // Update the path to your actual image file

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40rem", // Adjusted height
    };

    return (
        <section
            className="flex items-center justify-center"
            style={bannerStyle}
        >
            <div className="text-white text-center">
                <h1 className="text-4xl font-bold mb-4">Social Life Reality</h1>
                <p className="text-lg">
                    A young rich man sitting beside a poor old man
                </p>
                {/* Add other content or call-to-action buttons */}
            </div>
        </section>
    );
};

export default Banner;
