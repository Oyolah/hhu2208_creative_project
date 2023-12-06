import React from "react";
import Banner from "../../Components/Banner/Banner";
import NewsletterSection from "../../Components/NewsletterSection/NewsletterSection";
import AboutUsVideoSection from "../../Components/AboutUsVideoSection/AboutUsVideoSection";
import ChildLaborSection from "../../Components/ChildLaborSection/ChildLaborSection";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <NewsletterSection />
            <AboutUsVideoSection />
            <ChildLaborSection />
        </div>
    );
};

export default HomePage;
