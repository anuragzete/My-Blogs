import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Home, User, Info } from 'lucide-react';

const NEON_COLORS = [
    'from-pink-500 to-purple-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-orange-500'
];

export default function Navbar({ setActiveSection }) {
    const { theme, toggleTheme } = useTheme();
    const [neonIndex, setNeonIndex] = useState(0);

    const visibleNavItems = [
        { name: 'Home', icon: Home, href: '#home' },
        { name: 'About', icon: Info, href: "#about" },
        { name: 'Profile', icon: User, href: '#userprofile' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setNeonIndex((prev) => (prev + 1) % NEON_COLORS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl 
                ${theme === 'dark'
                ? 'bg-gray-900/80 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                : 'bg-white/80 shadow-lg'}
                backdrop-blur-md rounded-2xl transition-all duration-300`}
        >
            <div className="px-4 py-3 flex items-center justify-between">
                {/* Neon Title in Both Themes */}
                <a
                    href="#"
                    className={`text-2xl font-bold transition-all duration-300 bg-gradient-to-r ${NEON_COLORS[neonIndex]} bg-clip-text text-transparent`}
                >
                    Blogs
                </a>

                {/* Navigation Items */}
                <div className="flex items-center space-x-4">
                    {visibleNavItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveSection(item.href.substring(1))}
                            className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300
                                ${theme === 'dark'
                                ? `hover:bg-gradient-to-r ${NEON_COLORS[neonIndex]} hover:text-white`
                                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
                        >
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg transition-all duration-300 
                            ${theme === 'dark'
                            ? `hover:bg-gradient-to-r ${NEON_COLORS[neonIndex]} text-yellow-400`
                            : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
