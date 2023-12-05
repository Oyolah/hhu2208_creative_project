// ContactUsPage.js
import React, { useState } from "react";
import Banner from "../../Components/AboutUsBanner/AboutUsBanner"; // Reusing the Banner component
import contactImage from "../../assets/street_begger_eu_2013.jpeg"; // Update the path to your contact image
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // Import icons from react-icons

const ContactUsPage = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // Add logic to send the form data to your server or perform other actions
    };

    return (
        <div>
            <Banner
                backgroundImage={contactImage}
                title="Contact Us"
                subtitle="Get in touch with us"
            />
            {/* Small Cards Section */}
            <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {/* Phone Card */}
                <div className="bg-white p-4 rounded-md shadow-md flex items-center">
                    <div className="text-blue-500 text-3xl mr-4">
                        <FiPhone />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">Phone</h3>
                        <p>+30 690 6688440</p>
                    </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-4 rounded-md shadow-md flex items-center">
                    <div className="text-blue-500 text-3xl mr-4">
                        <FiMail />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">Email</h3>
                        <p>info@example.com</p>
                    </div>
                </div>

                {/* Address Card */}
                <div className="bg-white p-4 rounded-md shadow-md flex items-center">
                    <div className="text-blue-500 text-3xl mr-4">
                        <FiMapPin />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">Address</h3>
                        <p>123 Main Street, City, Country</p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="container mx-auto my-8 p-8 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ContactUsPage;
