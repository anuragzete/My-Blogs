import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export default function TermsAndConditions() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <section className="container mx-auto mb-8 px-16 py-10 max-w-5xl bg-gray-100 dark:bg-gray-800 p-10 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Last updated: January, 2025</p>

            <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">By accessing or using this website ('Website') and engaging with our content, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our Website.</p>

            <h2 className="text-2xl font-semibold mt-6">2. Use of Content</h2>
            <p className="text-gray-700 dark:text-gray-300">All content, including blog posts, articles, images, and other materials available on this website, is for personal and non-commercial use only. You are prohibited from reproducing, distributing, or reselling any content without prior written permission.</p>

            <h2 className="text-2xl font-semibold mt-6">3. Comments and User Content</h2>
            <p className="text-gray-700 dark:text-gray-300">When posting comments, you agree to maintain respectful discourse. Any abusive, offensive, or spam content will be removed, and repeat offenders may be banned.</p>

            <h2 className="text-2xl font-semibold mt-6">4. Data Collection and Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300">We collect user data as outlined in our <Link to="/privacy-policy" className="hover:underline text-blue-500">Privacy Policy</Link>. This includes information such as your name, email address, and browsing behavior.</p>

            <h2 className="text-2xl font-semibold mt-6">5. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300">All materials on this website are protected by copyright and intellectual property laws. Unauthorized use of our content is strictly prohibited.</p>

            <h2 className="text-2xl font-semibold mt-6">6. Prohibited Activities</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Using the Website for any illegal or unauthorized purpose.</li>
                <li>Attempting to hack, disrupt, or interfere with the Website's functionality.</li>
                <li>Engaging in activities that violate these Terms and Conditions.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">7. Termination of Access</h2>
            <p className="text-gray-700 dark:text-gray-300">We reserve the right to suspend or terminate your access to this Website if you violate these terms.</p>

            <h2 className="text-2xl font-semibold mt-6">8. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">We may update these Terms and Conditions from time to time. Continued use of the Website signifies your acceptance of any changes.</p>

            <h2 className="text-2xl font-semibold mt-6">9. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">If you have any questions, please contact us:</p>
            <p className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <strong>Email :</strong> anuragzete27@outlook.com
                <br/>
                <strong>Mobile No. :</strong> +91 8793738304
                <br/>
                <strong>Support Hours :</strong> Monday to Friday, 9:00 AM - 6:00 PM (IST)
            </p>
        </section>
    );
}
