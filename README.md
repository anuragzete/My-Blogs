# 📝 **Blogging Website**

A modern and responsive **blogging platform** built with **React, Vite, and Tailwind CSS**. 🚀 Seamlessly integrated with **Firebase for authentication and database management**, this platform allows users to **explore blogs**, save favorites, and manage their reading progress. ✨

---

## 🌟 **Features**

### 🔥 **User Authentication**
- Secure login with **Google and Microsoft authentication**.
- Profile management for authenticated users.
- Session persistence for a seamless experience.

### 📚 **Blog Management**
- Dynamic fetching and rendering of blogs from **Firebase**.
- **Lazy loading** for optimized performance.
- Infinite scrolling with a **View More Blogs** button.
- **Markdown-based rendering** for consistent blog formatting.

### 💾 **User Interaction and Preferences**
- **Save favorites** and create a wishlist (authenticated users only).
- Track **reading progress** for each blog.
- **Comment section** with real-time updates.
- **Push notifications** for new blog releases.

### 🌑 **Theming and UI**
- **Dark mode** and light mode switch.
- Blurry transparent background with subtle gradient shapes.
- Smooth animations and transitions.
- Mobile-friendly and **responsive design**.

### 🔗 **Cross-Platform Publishing** (Coming Soon)
- **Automatic blog publishing** to **Medium** and potentially other platforms.
- Links back to the original blog for full reading.

---

## ⚙️ **Tech Stack**
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Firebase (Firestore, Storage, Authentication)
- **Deployment:** Firebase Hosting, GitHub Pages
- **Cross-Platform Publishing:** Medium API (Planned)

---

## 🚀 **Future Enhancements**
- ✅ **Email notifications** for subscribed users.
- ✅ **Offline support** for saved blogs.
- ✅ **Category-based filtering** and sorting.
- ✅ **Integration with analytics** for blog insights.

---

## 📂 **Project Structure**
```
/blogging-website
 ├── public                     # Static assets
 ├── src
 │     ├── components           # Reusable components
 │     ├── assets               # Project assets
 │     ├── context              # Context api for theme switching
 │     ├── firebase-config.js   # Firebase configuration
 │     ├── App.jsx              # Main App component
 │     └── main.jsx             # Entry point
 ├── .gitignore
 ├── README.md
 ├── vite.config.js
 ├── tailwind.config.js
 ├── package.json
 └── index.html
 
```

---

## 🚀 **Getting Started**

### ✅ **Prerequisites**
- Node.js and npm installed.
- Firebase project set up with Firestore, Storage, and Authentication enabled.

### 🔥 **Installation**
1. Clone the repository:
```bash
git clone https://github.com/anuragzete/My-Blogs.git
cd blog
```
2. Install dependencies:
```bash
npm install
```
3. Configure Firebase:
- Create a `.env` file and add your Firebase credentials:
```plaintext
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

### 🚀 **Run the Project**
```bash
npm run dev
```

### 🌐 **Open in Browser**
```
http://localhost:5173
```

---

## 🔥 **Cross-Platform Publishing (Planned)**
- **Medium API Integration:** Automatically publish new blogs on **Medium** and other platforms.
- Include a **canonical link** to direct readers back to the main website.
- Manage **cross-platform analytics** and statistics.

---

## 📄 **License**

[MIT License](LICENSE)

---

## 💬 **Contributing**

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## 🌐 **Contact**
- **Portfolio:** [https://portfolio-anuragzete.web.app](https://portfolio-anuragzete.web.app)
- **Email:** [anuragzete27@outlook.com](mailto:anuragzete27@outlook.com)
- **LinkedIn:** [Anurag Zete](https://linkedin.com/in/anurag-zete-java-developer)

---

🔥 Happy Blogging! 🚀

