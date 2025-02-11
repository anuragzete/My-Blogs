import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Home, User, Info, Menu, X } from 'lucide-react';

const NEON_COLORS = [
    'from-pink-500 to-purple-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-orange-500'
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [neonIndex, setNeonIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                : 'bg-white/80 shadow-lg'
            }
                backdrop-blur-md rounded-2xl transition-all duration-300`}
        >
            <div className="px-4 py-3 flex items-center justify-between">
                {/* Neon Title */}
                <NavLink
                    to="/"
                    className={`text-2xl font-bold transition-all duration-300 bg-gradient-to-r ${NEON_COLORS[neonIndex]} bg-clip-text text-transparent`}
                >
                    Blogs
                </NavLink>

                {/* Hamburger Button (Mobile) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-600 dark:text-white focus:outline-none"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    <NavItem to="/" label="Home" Icon={Home} theme={theme} />
                    <NavItem to="/about" label="About" Icon={Info} theme={theme} />
                    <NavItem to="/profile" label="Profile" Icon={User} theme={theme} />

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                            theme === 'dark'
                                ? `hover:bg-gradient-to-r ${NEON_COLORS[neonIndex]} text-yellow-400`
                                : 'hover:bg-gray-100 text-gray-600'
                        }`}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col space-y-3">
                    <NavItem to="/" label="Home" Icon={Home} theme={theme} onClick={() => setIsMenuOpen(false)} />
                    <NavItem to="/about" label="About" Icon={Info} theme={theme} onClick={() => setIsMenuOpen(false)} />
                    <NavItem to="/profile" label="Profile" Icon={User} theme={theme} onClick={() => setIsMenuOpen(false)} />

                    {/* Theme Toggle (Mobile) */}
                    <button
                        onClick={() => {
                            toggleTheme();
                            setIsMenuOpen(false);
                        }}
                        className={`p-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                            theme === 'dark'
                                ? `hover:bg-gradient-to-r ${NEON_COLORS[neonIndex]} text-yellow-400`
                                : 'hover:bg-gray-100 text-gray-600'
                        }`}
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        <span>Toggle Theme</span>
                    </button>
                </div>
            )}
        </nav>
    );
}

// Reusable NavItem Component
const NavItem = ({ to, label, Icon, theme, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive ? 'text-indigo-500 font-bold' : theme === 'dark' ? 'text-white' : 'text-gray-700'
            }`
        }
    >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
    </NavLink>
);
