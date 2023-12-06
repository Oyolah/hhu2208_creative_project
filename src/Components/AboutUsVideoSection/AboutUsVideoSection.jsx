// AboutUsPage.js or AboutUsVideoSection.js
import React from "react";

const AboutUsVideoSection = () => {
    return (
        <section className="bg-gray-100 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-8">
                FIND OUT MORE ABOUT US
            </h2>
            <div className="max-w-16 aspect-h-9">
                {/* Replace the YouTube video URL with your own */}
                <iframe
                    width="100%"
                    height="405"
                    src="https://www.youtube.com/embed/sNlwh8vT2NU?si=2XFRHcyMQ0Oy2AX6"
                    title="Wasteland documentary"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </section>
    );
};

export default AboutUsVideoSection;
