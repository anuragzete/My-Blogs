import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Blog from "./components/Blog.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";

export default function App() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for the page to load (including images & scripts)
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 500); // Small delay for smooth transition
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <Router>
            {loading ? (
                <LoadingScreen />
            ) : (
                <div className={`min-h-screen flex flex-col transition-all duration-700 ${
                    theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
                }`}>
                    <Navbar />
                    <main className="container flex-grow mx-auto px-4 pt-24">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/profile" element={<UserProfile />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            )}
        </Router>
    );
}
