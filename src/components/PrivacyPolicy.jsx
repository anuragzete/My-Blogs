import React, {useEffect} from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <section className="container mx-auto mb-8 px-16 py-10 max-w-5xl bg-gray-100 dark:bg-gray-800 p-10 rounded-xl shadow-lg mb-10">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Last updated: January, 2025</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Personal Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300">
                When you interact with our site, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Device and browser details</li>
                <li>Usage data, such as pages visited and content accessed</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300">
                We use the information collected from you for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 ml-4">
                <li>To improve website functionality and user experience</li>
                <li>To send updates, notifications, and promotional content</li>
                <li>To analyze traffic and user behavior</li>
                <li>To enhance security and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 dark:text-gray-300">
                We use cookies to enhance your browsing experience. You may disable cookies in your browser settings,
                but certain features may not work properly.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300">
                We do not sell, trade, or rent your personal information. However, we may share data with trusted service
                providers who assist us in operating our website, such as analytics tools and email service providers.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Protecting Your Data</h2>
            <p className="text-gray-700 dark:text-gray-300">
                We implement security measures to protect your information. However, no method of online transmission
                is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300">
                You have the right to request access, modification, or deletion of your personal information. Contact us
                for assistance.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
                We may update this policy periodically. Please review this page for changes.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">
                If you have any questions or concerns, reach out to us at:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Email :</strong> anuragzete27@outlook.com
                <br/>
                <strong>Mobile No. :</strong> +91 8793738304
                <br/>
                <strong>Support Hours :</strong> Monday to Friday, 9:00 AM - 6:00 PM (IST)
            </p>
        </section>
    );
}
