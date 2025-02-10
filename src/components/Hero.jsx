import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import TechReadingSVG from "../assets/tech-reading.svg"; // Add a relevant SVG graphic

export default function Hero() {
    const greetings = ["Hey there!", "Glad to see you!", "Welcome aboard!", "Happy to have you here!"];
    const [greeting, setGreeting] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (index < greetings.length) {
            const typingInterval = setTimeout(() => {
                setGreeting(greetings[index]);
                setIndex(index + 1);
            }, 2500);

            return () => clearTimeout(typingInterval);
        } else {
            setTimeout(() => {
                setGreeting("Hello!");
                setIndex(0);
            }, 10000);
        }
    }, [index]);

    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-16 text-center space-y-8">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                    <span className="text-blue-600 dark:text-blue-400">
                        {greeting}
                        {showCursor && <span className="animate-blink">|</span>}
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                    Welcome to my blogging space!
                </p>
            </div>

            <div className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                <p>
                    I share insights on technology, coding, and development. Stay tuned for exciting content!
                </p>
            </div>

            {/* SVG Graphic */}
            <div className="w-60 h-60 md:w-96 md:h-96 mx-auto animate-fade-in">
                <img src={TechReadingSVG} alt="Tech Reading" className="w-full h-full" />
            </div>

            <a href="#blogsList" className="inline-block animate-bounce mt-4">
                <ArrowDown className="w-6 h-6" />
            </a>
        </section>
    );
}
