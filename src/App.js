import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Gallery from "./pages/Gallery/Gallery";
import BlogPage from "./pages/BlogPage/BlogPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/aboutus" element={<AboutPage />} />
                    <Route exact path="/blog" element={<BlogPage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contactus" element={<ContactPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
