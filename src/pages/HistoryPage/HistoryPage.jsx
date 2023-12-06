// HistoryPage.js
import React from "react";

// Import placeholder images
import earlyExploitationImage from "../../assets/early_exploitation.png";
import industrialRevolutionImage from "../../assets/industrial_revolution.jpeg";

const HistoryPage = () => {
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-gray-700 mb-8">
                        History of Exploitation
                    </h2>

                    {/* Section 1: Early Forms of Exploitation with Image */}
                    <div className="mb-8 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8">
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">
                                Early Forms of Exploitation
                            </h3>
                            <p className="text-gray-600">
                                Exploitation has deep historical roots, with
                                early civilizations witnessing various forms of
                                oppression and forced labor. From ancient
                                serfdom to feudal systems, human history is
                                marked by struggles against exploitation.
                            </p>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <img
                                src={earlyExploitationImage}
                                alt="Early Forms of Exploitation"
                                className="w-full h-auto rounded-md"
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                Image: Early Forms of Exploitation (Placeholder)
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Industrial Revolution with Image */}
                    <div className="mb-8 flex flex-col md:flex-row-reverse items-center">
                        <div className="md:w-1/2 md:pl-8">
                            <img
                                src={industrialRevolutionImage}
                                alt="Industrial Revolution"
                                className="w-full h-auto rounded-md"
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                Image: Industrial Revolution (Placeholder)
                            </p>
                        </div>
                        <div className="md:w-1/2 md:pr-8">
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">
                                Industrial Revolution
                            </h3>
                            <p className="text-gray-600">
                                The Industrial Revolution brought about
                                significant societal changes, but it also gave
                                rise to harsh working conditions and child
                                labor. Exploitation in factories sparked social
                                movements advocating for workers' rights and
                                better working conditions.
                            </p>
                        </div>
                    </div>

                    {/* Section 3: Modern Exploitation with Video */}
                    <div className="mb-8 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8">
                            {/* Replace with your actual video link */}
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Jv1H_fAoOG4?si=4NWBIGYyFDe6g3w1"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                            {/* <iframe
                                title="Modern Exploitation"
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/your-video-id"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe> */}
                            <p className="text-sm text-gray-500 mt-2">
                                Video: Modern Exploitation (Placeholder)
                            </p>
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">
                                Modern Forms of Exploitation
                            </h3>
                            <p className="text-gray-600">
                                In the modern era, exploitation takes diverse
                                forms, including human trafficking, child labor,
                                and workplace exploitation. Awareness and
                                advocacy play crucial roles in addressing these
                                issues and working towards a more just society.
                            </p>
                        </div>
                    </div>

                    {/* Add more sections as needed */}
                </div>
            </section>
        </div>
    );
};

export default HistoryPage;
