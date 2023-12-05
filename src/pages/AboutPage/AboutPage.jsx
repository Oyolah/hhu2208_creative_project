// AboutUsPage.js
import React from "react";
import Banner from "../../Components/AboutUsBanner/AboutUsBanner"; // You can reuse the Banner component
import teamImage from "../../assets/street_begger_eu_2013.jpeg"; // Update the path to your team image

const AboutUsPage = () => {
    return (
        <div>
            <Banner
                backgroundImage={teamImage}
                title="About Us"
                subtitle="Learn more about our amazing team"
            />

            <section className="container mx-auto my-8 p-8 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nec ex quis est lacinia vulputate.
                </p>
                <p className="text-gray-600 mb-4">
                    Integer condimentum enim in orci porta, a consectetur purus
                    tincidunt. Sed eu turpis eu mi tincidunt accumsan.
                </p>
                <p className="text-gray-600">
                    Duis auctor, lectus nec fermentum feugiat, velit leo
                    fringilla tellus, vel lacinia elit velit et nulla.
                </p>
            </section>
        </div>
    );
};

export default AboutUsPage;
