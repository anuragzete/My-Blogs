import React, { useState, useEffect, useRef } from "react";
import { Copy, MessageSquare, Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const blogData = {
    title: "Understanding Closures in JavaScript",
    author: "John Doe",
    date: "February 10, 2025",
    coverImage: "https://imageplaceholder.net/600x400",
    content: `Closures are an important concept in JavaScript that allows functions to retain access to variables from their lexical scope even after the outer function has finished executing.`,
    codeSnippet: `function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
            console.log(\`Outer: \${outerVariable}, Inner: \${innerVariable}\`);
        };
    }`,
    comments: [
        { user: "Alice", text: "Great explanation! Closures were always confusing to me.", date: "Feb 10, 2025", time: "10:30 AM" },
        { user: "Bob", text: "This helped me understand callbacks better.", date: "Feb 10, 2025", time: "11:00 AM" }
    ]
};

export default function Blog() {
    const { theme } = useTheme();
    const [comments, setComments] = useState(blogData.comments);
    const [newComment, setNewComment] = useState("");
    const [maxProgress, setMaxProgress] = useState(0);
    const commentSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            let progress = (scrollTop / docHeight) * 100;

            if (commentSectionRef.current) {
                const rect = commentSectionRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    progress = 100;
                }
            }

            if (progress > maxProgress) {
                setMaxProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [maxProgress]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(blogData.codeSnippet);
        alert("Code copied to clipboard!");
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            const newCommentObj = {
                user: "Guest",
                text: newComment,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            };
            setComments([...comments, newCommentObj]);
            setNewComment("");
        }
    };

    return (
        <section className="container mx-auto px-4 py-8 max-w-3xl relative">
            <h1 className="text-4xl font-bold mb-4">{blogData.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-2">By {blogData.author} | {blogData.date}</p>
            <img src={blogData.coverImage} alt="Blog Cover" className="w-full rounded-lg mb-6" />
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{blogData.content}</p>

            <div className="relative bg-gray-900 text-white font-mono p-4 rounded-lg mb-6">
                <pre className="overflow-x-auto">
                    <code>{blogData.codeSnippet}</code>
                </pre>
                <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                >
                    <Copy className="w-5 h-5" />
                </button>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div ref={commentSectionRef} className="space-y-4">
                {comments.map((comment, index) => (
                    <div key={index}>
                        <p className="font-semibold">{comment.user} <span className="text-xs text-gray-500">({comment.date} at {comment.time})</span></p>
                        <p className="text-gray-600 dark:text-gray-300">{comment.text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center space-x-2">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                />
                <button
                    onClick={handleCommentSubmit}
                    className="p-2 text-blue-500 transition-all duration-300 hover:scale-110 active:scale-90"
                >
                    <Send className="w-6 h-6 hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Neon Progress Bar */}
            <div className="fixed bottom-0 left-0 w-full h-2 bg-gray-300">
                <div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                    style={{ width: `${maxProgress}%` }}
                ></div>
            </div>
        </section>
    );
}
