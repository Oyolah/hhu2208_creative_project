import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                    Blow Your Mind.
                </h1>
                <p className="py-4">
                    "Exploitation of any form denies individuals their basic
                    rights. Let us stand united against exploitation, raising
                    our voices to bring attention to the suffering of those
                    affected. Together, we can create a world where dignity,
                    respect, and putting an end to the cycle of exploitation and
                    fostering a future of justice and equality for all."
                </p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm">Education</li>
                        <li className="py-2 text-sm">Empowerment</li>
                        <li className="py-2 text-sm">Advocacy</li>
                        <li className="py-2 text-sm">Equality</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm">Donation</li>
                        <li className="py-2 text-sm">Documentation</li>
                        <li className="py-2 text-sm">Guides</li>
                        <li className="py-2 text-sm">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Links</h6>
                    <ul>
                        <li className="py-2 text-sm">Home</li>
                        <li className="py-2 text-sm">About Us</li>
                        <li className="py-2 text-sm">History</li>
                        <li className="py-2 text-sm">Blog</li>
                        <li className="py-2 text-sm">Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm">Claim</li>
                        <li className="py-2 text-sm">Policy</li>
                        <li className="py-2 text-sm">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
