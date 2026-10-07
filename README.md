# 🎬 My Vlogs with Karthik - Official Creator Website

> **“Capturing Life, One Vlog at a Time.”**  
> *Life. Friends. Travel. Memories.*

A modern, responsive, cinematic creator website designed for **Karthik** — engineering student and YouTube content creator from **Lingasuguru, Karnataka, India**.

---

## 🌟 Highlights & Features

- **Cinematic Dark Theme**: Premium charcoal/black aesthetics, glassmorphic cards, subtle YouTube red accents (`#e50914`), and modern typography (Plus Jakarta Sans & Outfit).
- **Sticky Navigation**: Smooth-scrolling desktop header and mobile drawer with quick YouTube Subscribe button.
- **Hero Spotlight**: Animated brand title, creator identity pill, call-to-actions, and live channel stats (Subscribers, Views, Uploads).
- **Featured Vlog Player**: Dedicated spotlight for top-trending vlogs with built-in modal player.
- **Dedicated Vlog Library**:
  - Live search by video title, keywords, or location.
  - Interactive category filters: *College Vlogs, Village Vlogs, Family Vlogs, Friends & Fun, Travel, Challenges, Events*.
  - Direct YouTube links and popup video modal with zero redirection.
- **About Karthik**: Bio, creator philosophy, filming gear kit (cameras, drone, audio), interests, and vision.
- **Memories / Photo Gallery**:
  - Cinematic photo gallery across *College, Friends, Family, Travel, Village, Behind the Scenes*.
  - Interactive Lightbox with keyboard navigation (Left/Right arrows, Esc to close).
- **Interactive Journey Timeline**:
  - Milestones from 0 subscribers to 100K Silver Play Button goal with achievement badges.
- **Places I've Visited**: Travel cards showcasing *Lingasuguru, Mantralayam, Bengaluru, Hampi, Gokarna, Coorg* with linked vlogs.
- **Contact & Collab Form**: Built-in inquiry form, direct social media connections (Instagram, YouTube, Email).
- **Celebration Confetti**: Interactive confetti explosion whenever visitors click "Subscribe".
- **Back-to-Top Floating Button**: Smooth upward navigation.

---

## 📁 Beginner-Friendly Project Structure

```text
vlog/
├── public/                 # Static public assets (icons, images)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── AboutSection.jsx   # Profile, gear kit, bio & creator goals
│   │   ├── BackToTop.jsx      # Floating back-to-top button
│   │   ├── CategoryFilter.jsx # Category pill selector
│   │   ├── ContactSection.jsx # Contact form & direct social handles
│   │   ├── FeaturedVlog.jsx   # Top spotlight video
│   │   ├── Footer.jsx         # Footer branding & channel links
│   │   ├── Gallery.jsx        # Memories photo gallery with filters
│   │   ├── Hero.jsx           # Hero header with channel stats & CTAs
│   │   ├── LightboxModal.jsx  # Fullscreen photo viewer
│   │   ├── Navbar.jsx         # Sticky navigation with mobile menu
│   │   ├── Timeline.jsx       # YouTube milestones timeline
│   │   ├── TravelCard.jsx     # Individual destination card
│   │   ├── TravelSection.jsx  # "Places I've Visited" section
│   │   ├── VideoCard.jsx      # Vlog card with thumbnail & hover
│   │   ├── VideoGrid.jsx      # Vlogs library with live search
│   │   └── VideoModal.jsx     # Embedded YouTube popup player
│   ├── data/
│   │   └── creatorConfig.js   # ⭐ Central file to replace videos, photos & links
│   ├── App.jsx                # Main single-page application layout
│   ├── index.css              # Tailwind CSS styles & animations
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML template with Google Fonts & metadata
├── tailwind.config.js         # Tailwind theme customizations
├── vite.config.js             # Vite development server config
└── package.json               # Dependencies and scripts
```

---

## ⚡ How to Run Locally

### 1. Open your terminal in this folder:
```powershell
cd "c:\Users\karthik patil\Downloads\vlog"
```

### 2. Start the local development server:
```powershell
npm run dev
```

Open your browser and navigate to:
👉 **`http://localhost:3000`**

### 3. Build for production (when ready to deploy):
```powershell
npm run build
```
This generates an optimized, high-performance static folder in `dist/`.

---

## 🛠️ How to Customize Your Content (Where to Edit)

Everything you need to change is located in **one single file**:  
👉 **`src/data/creatorConfig.js`**

### 1. Updating Your YouTube Links & Socials
Open `src/data/creatorConfig.js` and edit:
```javascript
export const CREATOR_PROFILE = {
  name: "Karthik",
  brandName: "My Vlogs with Karthik",
  brandShort: "KARTHIK VLOGS",
  hometown: "Lingasuguru, Karnataka, India",
  youtubeChannelUrl: "https://www.youtube.com/@YOUR_CHANNEL_HANDLE",
  youtubeSubscribeUrl: "https://www.youtube.com/@YOUR_CHANNEL_HANDLE?sub_confirmation=1",
  socials: {
    instagram: "https://www.instagram.com/YOUR_INSTAGRAM",
    email: "your.email@gmail.com",
  },
  // ...
};
```

### 2. Replacing Placeholder Videos with Your Real YouTube Videos
To add or replace a video in `VLOGS_DATA`:
1. Find your YouTube video URL, for example: `https://www.youtube.com/watch?v=AbCdEfGhIjK`
2. The `youtubeVideoId` is the 11-letter ID at the end: `AbCdEfGhIjK`
3. Update or add an entry in `src/data/creatorConfig.js`:
```javascript
{
  id: "vlog-01",
  title: "Your Vlog Title Here",
  category: "College Vlogs", // College Vlogs, Village Vlogs, Travel, etc.
  date: "Oct 10, 2026",
  views: "12,400 views",
  duration: "14:15",
  youtubeVideoId: "AbCdEfGhIjK", // Your real YouTube ID!
  thumbnail: "https://your-thumbnail-url.jpg",
  description: "Short description about what happens in this vlog."
}
```

### 3. Adding Your Own Photos to the Memories Gallery
In `src/data/creatorConfig.js`, find `GALLERY_PHOTOS`:
- You can put your own images into the `public/` folder (e.g. `public/photos/hostel.jpg`) and reference them as `/photos/hostel.jpg`
- Or paste any cloud image link.

### 4. Updating YouTube Milestones
In `src/data/creatorConfig.js`, find `JOURNEY_MILESTONES` to adjust dates, subscriber counts, or add new milestones like **50,000 Subscribers** or **500,000 Subscribers**.

---

## 🚀 Easy Deployment Options (Free)

Whenever you want to publish this website live on the internet with a custom domain (e.g. `karthikvlogs.com`):

### Option A: Vercel (Recommended & 1-Click)
1. Push this folder to a GitHub repository.
2. Sign in to [Vercel.com](https://vercel.com) with GitHub.
3. Select your repository and click **Deploy**.
4. Your website is live in under 60 seconds with free SSL and blazing-fast global CDN!

### Option B: Netlify
1. Drag and drop the `dist` folder into [Netlify Drop](https://app.netlify.com/drop).
2. Live instantly!

---

*Made with ❤️ for Karthik's YouTube Community • Lingasuguru, Karnataka*
