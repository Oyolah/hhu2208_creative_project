// ContactUsPage.js or NewsletterSection.js
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Import mail icon from react-icons

const NewsletterSection = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        // Add logic to subscribe the user, for example, send the email to a server
        console.log(`Subscribed with email: ${email}`);
    };

    return (
        <section className="bg-gray-200 py-12 text-center">
            <div className="text-3xl text-gray-700 mb-4">
                <FaEnvelope className="inline-block text-blue-500 text-5xl mr-2" />
                Get the latest Street Child news in your inbox
            </div>
            <p className="text-gray-600 mb-8">
                You may unsubscribe at any time and we will not share your email
                address with any third party.
            </p>
            <div className="flex items-center justify-center">
                <input
                    type="email"
                    className="p-2 border border-gray-300 rounded-l"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    onClick={handleSubscribe}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r"
                >
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default NewsletterSection;
