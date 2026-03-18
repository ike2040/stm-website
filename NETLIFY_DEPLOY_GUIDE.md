# 🚀 Hosting STM Website on Netlify

Since your website uses **Firebase (Cloud Storage & Firestore)**, it needs to be hosted on a real server to bypass browser security restrictions. Follow these simple steps to go live:

### 1. Create a Netlify Account
Visit [Netlify.com](https://www.netlify.com) and sign up for a free account.

### 2. Prepare the Files
The following file is already configured for you:
- `netlify.toml`: Optimizes routing and security for your STM project.

### 3. Deploy (Drag & Drop)
1. Go to your Netlify Dashboard.
2. Select **"Sites"** on the left.
3. At the bottom, you will see a box that says **"Want to deploy a new site without connecting to Git? Drag and drop your site folder here"**.
4. Take your entire project folder (`STM C.M`) and drag it into that box.

### 4. Why Host?
- ✅ **Cloud Sync**: Firebase requires a "secure origin" (like `https://...`) to allow file uploads.
- ✅ **Cross-Device**: Your phone will now be able to actually "talk" to your laptop.
- ✅ **Performance**: Netlify's global network makes the site load much faster.

### 🛑 Important Reminder (Firebase Security)
Once you are live, make sure your Firebase Storage and Firestore rules allow "Read/Write" access, otherwise, the site will connect but won't be able to save data.

---
*Created by Antigravity AI for Seekers of the Truth Ministries*
