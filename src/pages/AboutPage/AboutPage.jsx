// AboutUsPage.js
import React from "react";
import { Link } from "react-router-dom";

import Banner from "../../Components/AboutUsBanner/AboutUsBanner"; // You can reuse the Banner component
import teamImage from "../../assets/street_begger_eu_2013.jpeg"; // Update the path to your team image

const AboutUsPage = () => {
    return (
        <div>
            <Banner
                backgroundImage={teamImage}
                title="About Us"
                subtitle="Our Commitment Against Exploitation"
            />

            {/* Mission and Values Section */}
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">
                        Our Mission and Values
                    </h2>
                    <p className="text-gray-600 mb-6">
                        At [Your Organization Name], our mission is to build a
                        world where every individual is free from the shackles
                        of exploitation. We are driven by the core values of
                        justice, equality, and compassion. Through our tireless
                        efforts, we strive to create lasting change and empower
                        those affected by exploitation.
                    </p>
                </div>
            </section>
            {/* Our Impact Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">
                        Our Impact Against Exploitation
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Over the years, we have made significant strides in
                        combating exploitation. Through collaborative
                        initiatives, awareness campaigns, and direct
                        interventions, we have contributed to dismantling
                        systems of oppression and providing support to
                        survivors. Our impact extends beyond borders, as we
                        continue to champion the rights of those most vulnerable
                        to exploitation.
                    </p>
                </div>
            </section>
            {/* Team Section */}
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">
                        Meet Our Team
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Blow your Mind's dedicated team comprises individuals
                        passionate about eradicating exploitation. From legal
                        experts to social workers, our diverse team collaborates
                        to address the multifaceted challenges posed by
                        exploitation. Together, we work towards a future where
                        every person can live free from fear and injustice.
                    </p>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">
                        Join Us in the Fight Against Exploitation
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We invite individuals, organizations, and advocates to
                        join us in our mission. Whether you contribute through
                        volunteering, spreading awareness, or supporting our
                        initiatives, your involvement makes a difference.
                        Together, we can create a world where exploitation is no
                        longer tolerated, and the rights of every individual are
                        protected.
                    </p>
                    {/* Button to link to Contact Us page */}
                    <Link
                        to="/contactus"
                        className="button-color text-white py-2 px-4 rounded-md hover:bg-green-600"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
