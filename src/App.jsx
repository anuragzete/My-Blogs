import React, {useState, useEffect, useRef, Profiler} from 'react';
import {useTheme} from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Blog from "./components/Blog.jsx";

export default function App() {
    const {theme} = useTheme();
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Wait for the entire page to load (including images & scripts)
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 500); // Small delay for smooth transition
        };

        if (document.readyState === 'complete') {
            handleLoad(); // If already loaded, run immediately
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    useEffect(() => {
        // Set dynamic page title based on active section
        document.title = activeSection === "home"
            ? "Anurag Zete | Home"
            : `Anurag Zete | ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} `;
    }, [activeSection]);

    return (
        <>
            {loading ? (
                <LoadingScreen/>
            ) : (
                <div className={`min-h-screen flex flex-col transition-all duration-700 ${
                    theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
                }`}>
                    <Navbar setActiveSection={setActiveSection}/>
                    <main className="container flex-grow mx-auto px-4 pt-24">
                        {/*{activeSection === 'home' ? (
                            <Home />
                        ) : activeSection === 'about' ? (
                            <About />
                        ) :activeSection === 'userprofile' ? (
                            <UserProfile />
                        ) : null}*/}

                        <Blog />
                    </main>
                    <Footer/>
                </div>
            )}
        </>
    );
}

