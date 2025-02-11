import React, { useEffect } from 'react';
import Contact from "./Contact.jsx";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);


    return (
        <>
            <section id="about" className="py-20">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Enlarged Profile Image */}
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg">
                            <img
                                src="/resources/profilePhoto.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* About Me Text */}
                        <div className="text-gray-600 dark:text-gray-300 space-y-4 md:flex-1">
                            <p>
                                Hi, I’m <strong>Anurag Zete</strong>, a passionate <strong>Full Stack Java Developer</strong> and <strong>Computer Science student</strong> dedicated to building dynamic, scalable, and efficient applications. My expertise lies in <strong>Java and React</strong>, where I create seamless web experiences with clean architecture and maintainable code. Currently, I’m expanding my backend skills by diving deeper into the <strong>Spring Framework</strong> to develop robust and secure APIs.
                            </p>
                            <p>
                                My passion extends beyond development—I have a strong interest in <strong>cybersecurity</strong>, <strong>blockchain technology</strong>, <strong>open-source contributions</strong>, and <strong>technical writing</strong>. I actively contribute to open-source projects, collaborate with developers worldwide, and share insights through blogs and discussions.
                            </p>
                            <p>
                                In addition to coding, I am an advocate for <strong>performance optimization, security best practices, and efficient system design</strong>. I thrive on solving complex challenges with innovative solutions, whether in <strong>database management, API development, or front-end design</strong>.
                            </p>
                            <p>
                                Let's connect and build something extraordinary together! 🚀
                            </p>

                            {/* Social Links */}
                            <p className="text-lg font-semibold">You can find me here:</p>
                            <div className="flex space-x-4 text-2xl">
                                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-400">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                    <FaLinkedin />
                                </a>
                                <a href="mailto:your-email@example.com" className="hover:text-red-500">
                                    <FaEnvelope />
                                </a>
                                <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                                    <FaGlobe />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Contact Button */}
                    <div className="text-center mt-8">
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}
