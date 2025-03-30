import React, {useEffect, useState} from "react";
import { Pencil, Heart, Bookmark, Trash2, LogOut } from "lucide-react";

const sampleUser = {
    username: "Anurag Zete",
    email: "anurag@example.com",
    profilePhoto: "",
    blogsRead: [
        { title: "Understanding Closures", date: "2024-02-01" },
        { title: "React Hooks Guide", date: "2024-02-05" }
    ],
    commentsMade: [
        {
            blog: "Advanced JavaScript",
            comment: "Great explanation on closures!",
            date: "2024-02-03",
            replies: [
                { text: "Thanks!", user: "JohnDoe" },
                { text: "Glad you found it useful.", user: "JaneSmith" }
            ]
        },
        {
            blog: "GraphQL Basics",
            comment: "Clear and concise article!",
            date: "2024-02-06",
            replies: [
                { text: "Much appreciated!", user: "AlexBrown" }
            ]
        }
    ],
    favorites: ["Understanding Closures", "React Hooks Guide"],
    wishlist: ["Advanced JavaScript", "GraphQL Basics"]
};

export default function UserProfile() {
    const [user, setUser] = useState(sampleUser);
    const [selectedStat, setSelectedStat] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    const handleStatClick = (stat) => {
        setSelectedStat(stat);
        setTimeout(() => {
            document.getElementById("details-section").scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const removeFromFavorites = (blog) => {
        setUser(prevUser => ({
            ...prevUser,
            favorites: prevUser.favorites.filter(item => item !== blog)
        }));
    };

    const removeFromWishlist = (blog) => {
        setUser(prevUser => ({
            ...prevUser,
            wishlist: prevUser.wishlist.filter(item => item !== blog)
        }));
    };

    const handleLogout = () => {
        console.log("User logged out");
        // Add actual logout logic here
    };

    return (
        <section className="max-w-4xl mx-auto mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-gray-700 dark:text-white">
                        {user.profilePhoto ? (
                            <img src={user.profilePhoto} alt="Profile" className="w-full h-full rounded-full object-cover" />
                        ) : (
                            user.username.charAt(0)
                        )}
                        <button className="absolute bottom-1 right-1 bg-gray-700 text-white p-1 rounded-full hover:bg-gray-600">
                            <Pencil size={16} />
                        </button>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{user.username}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start flex-row gap-4">
                    <div onClick={() => handleStatClick("blogsRead")} className="w-40 h-20 flex flex-col items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md cursor-pointer">
                        <span className="text-lg font-bold text-gray-800 dark:text-white">{user.blogsRead.length}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-300">Blogs Read</span>
                    </div>
                    <div onClick={() => handleStatClick("commentsMade")} className="w-40 h-20 flex flex-col items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-md cursor-pointer">
                        <span className="text-lg font-bold text-gray-800 dark:text-white">{user.commentsMade.length}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-300">Comments</span>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <Heart className="mr-2 text-red-500" /> Favorites
                </h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                    {user.favorites.map((item, index) => (
                        <li key={index} className="flex justify-between items-center">
                            {item}
                            <button onClick={() => removeFromFavorites(item)} className="text-red-500 hover:text-red-700">
                                <Trash2 size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <Bookmark className="mr-2 text-blue-500" /> Wishlist
                </h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                    {user.wishlist.map((item, index) => (
                        <li key={index} className="flex justify-between items-center">
                            {item}
                            <button onClick={() => removeFromWishlist(item)} className="text-red-500 hover:text-red-700">
                                <Trash2 size={16} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedStat && (
                <section id="details-section" className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                        {selectedStat === "blogsRead" ? "Blogs Read" : "Comments Made"}
                    </h3>
                    {selectedStat === "blogsRead" ? (
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                            {user.blogsRead.map((blog, index) => (
                                <li key={index}><strong>{blog.title}</strong> - {blog.date}</li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                            {user.commentsMade.map((commentData, index) => (
                                <li key={index} className="mb-4">
                                    <p><strong>Blog :</strong> {commentData.blog} ({commentData.date})</p>
                                    <p><strong>Comment :</strong> {commentData.comment}</p>
                                    {commentData.replies.length > 0 && (
                                        <ul className="ml-4 list-disc text-sm text-gray-500 dark:text-gray-300">
                                            {commentData.replies.map((reply, i) => (
                                                <li key={i}><strong>Reply </strong>({reply.user}) : {reply.text}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            )}

            <div className="mt-6 flex justify-center">
                <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
                    <LogOut size={18} /> Logout
                </button>
            </div>
        </section>
    );
}
