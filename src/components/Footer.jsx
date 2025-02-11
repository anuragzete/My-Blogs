import React, {useEffect} from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from "react-router-dom";

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer className={`w-full py-5 text-xs transition-all duration-300 
      ${theme === 'dark' ? 'bg-gray-900 text-white shadow-[0_-4px_15px_rgba(255,255,255,0.2)]' : 'bg-gray-100 text-gray-600 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]'}`}>
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between">
                <p>&copy; {new Date().getFullYear()} Anurag Zete. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 sm:mt-0">
                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    <span> | </span>
                    <Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>

                </div>
            </div>
        </footer>
    );
}
