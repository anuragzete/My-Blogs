import { useState, useEffect } from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    OAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { auth } from "../firebase-config"; // Import Firebase auth from config

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const microsoftProvider = new OAuthProvider("microsoft.com");
    const githubProvider = new GithubAuthProvider();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) navigate("/");
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleAuth = async (provider) => {
        setLoading(true);
        setError(null);
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("User:", result.user);
            navigate("/");
        } catch (error) {
            setError(error.message);
            console.error("Authentication error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailAuth = async () => {
        setLoading(true);
        setError(null);
        try {
            if (isSignup) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await sendEmailVerification(userCredential.user);
                alert("A verification email has been sent. Please verify your email before logging in.");
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                if (!userCredential.user.emailVerified) {
                    setError("Please verify your email before logging in.");
                    await signOut(auth);
                    return;
                }
            }
            navigate("/");
        } catch (error) {
            setError(error.message);
            console.error("Authentication error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordReset = async () => {
        if (!email) {
            setError("Please enter your email to reset password.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent.");
        } catch (error) {
            setError(error.message);
            console.error("Password reset error:", error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
            <div className="p-6 w-96 shadow-xl rounded-2xl bg-opacity-90 backdrop-blur-md border border-gray-200 dark:border-gray-700">
                <div>
                    <h2 className="text-xl font-bold text-center mb-4">{isSignup ? "Create an Account" : "Welcome Back"}</h2>
                    {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
                    {isSignup && <input type="text" placeholder="Full Name" className="mb-3 w-full p-2 border rounded" />}
                    <input type="email" placeholder="Email" className="mb-3 w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="mb-3 w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="w-full p-2 bg-blue-500 text-white rounded" onClick={handleEmailAuth} disabled={loading}>
                        {loading ? <Loader2 className="animate-spin" /> : isSignup ? "Sign Up" : "Login"}
                    </button>
                    {!isSignup && <p className="text-blue-500 text-sm text-center mt-2 cursor-pointer" onClick={handlePasswordReset}>Forgot Password?</p>}
                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300" />
                        <span className="mx-2 text-sm">OR</span>
                        <div className="flex-grow h-px bg-gray-300" />
                    </div>
                    <button onClick={() => handleAuth(googleProvider)} className="w-full mb-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded">Sign in with Google</button>
                    <button onClick={() => handleAuth(microsoftProvider)} className="w-full mb-2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Sign in with Microsoft</button>
                    <button onClick={() => handleAuth(githubProvider)} className="w-full p-2 bg-gray-800 hover:bg-gray-900 text-white rounded">Sign in with GitHub</button>
                    <p className="text-center mt-4 text-sm cursor-pointer" onClick={() => setIsSignup(!isSignup)}>
                        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
