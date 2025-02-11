import React, {useState, useEffect, useRef} from "react";
import {Copy, Send, BookOpen, CornerDownRight, Heart, Bookmark} from "lucide-react";
import {useTheme} from "../context/ThemeContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const blogData = {
    title: "Understanding Closures in JavaScript",
    date: "February 10, 2025",
    readingTime: "5 min read",
    coverImage: "https://imageplaceholder.net/600x400",
    content: `Closures are an important concept in JavaScript that allows functions to retain access to variables from their lexical scope even after the outer function has finished executing.`,
    codeSnippet: `function outerFunction(outerVariable) {
        return function innerFunction(innerVariable) {
            console.log(\`Outer: \${outerVariable}, Inner: \${innerVariable}\`);
        };
    }`,
    comments: [
        {
            user: "Alice",
            text: "Great explanation! Closures were always confusing to me.",
            date: "Feb 10, 2025",
            time: "10:30 AM",
            replies: []
        },
        {
            user: "Bob",
            text: "This helped me understand callbacks better.",
            date: "Feb 10, 2025",
            time: "11:00 AM",
            replies: []
        }
    ]
};

export default function Blog() {
    const {theme} = useTheme();
    const [comments, setComments] = useState(blogData.comments);
    const [newComment, setNewComment] = useState("");
    const [replyingTo, setReplyingTo] = useState(null);
    const commentSectionRef = useRef(null);
    const [showReplies, setShowReplies] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(blogData.codeSnippet);
        toast.success("Code copied to clipboard");
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            const newCommentObj = {
                user: "Guest",
                text: newComment,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                replies: []
            };
            setComments([newCommentObj, ...comments]);
            setNewComment("");
            setReplyingTo(null);
        }
    };

    const handleReplySubmit = (index) => {
        if (newComment.trim()) {
            const newReply = {
                user: "Guest",
                text: newComment,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            };
            const updatedComments = comments.map((comment, i) =>
                i === index ? {...comment, replies: [newReply, ...comment.replies]} : comment
            );
            setComments(updatedComments);
            setNewComment("");
            setReplyingTo(null);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            replyingTo !== null ? handleReplySubmit(replyingTo) : handleCommentSubmit();
        }
    };

    const toggleReplies = (index) => {
        setShowReplies((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            <section
                className="container mx-auto mt-4 px-16 py-10 max-w-5xl relative bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-10">
                <h1 className="text-4xl font-bold mb-4">{blogData.title}</h1>
                <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-2">
                    <p className="text-gray-500 dark:text-gray-400 mb-2">{blogData.date} | <BookOpen
                        className="inline w-5 h-5"/> {blogData.readingTime}</p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setIsFavorite(!isFavorite)}
                            className={`transition-transform duration-200 ease-in-out ${
                                isFavorite ? "text-red-500 scale-110" : "text-gray-500 hover:text-red-500"
                            }`}
                        >
                            <Heart className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} />
                        </button>
                        <button
                            onClick={() => setIsWishlisted(!isWishlisted)}
                            className={`transition-transform duration-200 ease-in-out ${
                                isWishlisted ? "text-blue-500 scale-110" : "text-gray-500 hover:text-blue-500"
                            }`}
                        >
                            <Bookmark className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
                        </button>
                    </div>

                </div>
                <img src={blogData.coverImage} alt="Blog Cover" className="w-full rounded-lg mb-6"/>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{blogData.content}</p>

                <div className="relative bg-gray-900 text-white font-mono p-4 rounded-lg mb-6">
                <pre className="overflow-x-auto">
                    <code>{blogData.codeSnippet}</code>
                </pre>
                    <button
                        onClick={copyToClipboard}
                        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white p-1 rounded"
                    >
                        <Copy className="w-5 h-5"/>
                    </button>
                </div>
            </section>

            <div className="bg-gray-200 dark:bg-gray-900 p-8 rounded-xl shadow-lg max-w-5xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-4">Comments ({comments.length})</h2>
                <div className="mt-6 flex items-center space-x-2">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onInput={(e) => {
                        e.target.style.height = "auto"; // Reset height to auto
                        e.target.style.height = `${e.target.scrollHeight}px`; // Set height dynamically
                    }}
                    placeholder={replyingTo !== null ? "Replying..." : "Add a comment..."}
                    className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white overflow-hidden resize-none"
                    rows="1"
                />
                    <button
                        onClick={replyingTo !== null ? () => handleReplySubmit(replyingTo) : handleCommentSubmit}
                        className="p-2 text-blue-500 transition-all duration-300 hover:scale-110 active:scale-90"
                    >
                        <Send className="w-6 h-6 hover:translate-x-1 transition-transform duration-300"/>
                    </button>
                </div>
                <br/>
                <div className="space-y-4">
                    {blogData.comments.map((comment, index) => (
                        <div key={index}>
                            <p className="font-semibold">{comment.user} <span
                                className="text-xs text-gray-500">({comment.date} at {comment.time})</span></p>
                            <p className="text-gray-600 dark:text-gray-300">{comment.text}</p>
                            <button className="text-blue-500 text-sm" onClick={() => toggleReplies(index)}>
                                {showReplies[index] ? "Hide Replies" : "View Replies"}
                            </button>
                            {showReplies[index] && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {comment.replies.map((reply, i) => (
                                        <div key={i}>
                                            <p className="font-semibold"><CornerDownRight
                                                className="inline w-4 h-4"/> {reply.user} <span
                                                className="text-xs text-gray-500">({reply.date} at {reply.time})</span></p>
                                            <p className="text-gray-600 dark:text-gray-300 ml-6">{reply.text}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
