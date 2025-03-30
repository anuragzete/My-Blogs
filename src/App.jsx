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
import AuthPage from "./components/AuthPage.jsx";

export default function App() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

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

    useEffect(() => {
        // Set dynamic page title based on active section
        document.title = activeSection === "home"
            ? "Blogs | Home"
            : `Blogs | ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} `;
    }, [activeSection]);

    return (
        <Router>
            {loading ? (
                <LoadingScreen />
            ) : (
                <Routes>
                    {/* Auth Page without Navbar & Footer */}
                    <Route path="/auth" element={<AuthPage />} />

                    {/* All Other Pages with Navbar & Footer */}
                    <Route
                        path="/*"
                        element={
                            <div
                                className={`min-h-screen flex flex-col transition-all duration-700 ${
                                    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
                                }`}
                            >
                                <Navbar setActiveSection={setActiveSection} />
                                <main className="container flex-grow mx-auto px-4 pt-24">
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/profile" element={<UserProfile />} />
                                        <Route path="/blog" element={<Blog />} />
                                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                                        <Route path="/contact" element={<Contact />} />
                                    </Routes>
                                </main>
                                <Footer />
                            </div>
                        }
                    />
                </Routes>
            )}
        </Router>
    );
}
