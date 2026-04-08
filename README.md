# 🌐 SquareUp – Digital Product Agency Website

SquareUp is a modern, responsive **digital product agency website** built using React and Tailwind CSS.  
It showcases services, portfolio work, company process, and contact features with a strong focus on **UI/UX, performance, and scalability**.

---

## 🚀 Live Preview
https://square-upp.vercel.app/


---

## 📌 Features

- ⚡ Fully responsive (Mobile, Tablet, Desktop)
- 🎨 Pixel-perfect UI based on Figma design
- 🧩 Component-based architecture (Reusable & scalable)
- 🚀 Optimized performance (lazy loading, image optimization)
- 🔍 SEO-friendly structure (meta tags, semantic HTML)
- ♿ Accessibility improvements (keyboard navigation, aria attributes)
- 📩 Contact form with validation (Zod)
- 🧠 Clean folder structure (feature-based architecture)

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Icons:** React Icons

---

## 📂 Project Structure


src/
│
├── app/ # App setup (Router, Providers)
├── features/ # Feature-based modules
│ ├── home/
│ ├── services/
│ ├── work/
│ ├── process/
│ ├── about/
│ ├── careers/
│ └── contact/
│
├── shared/ # Reusable components & UI
│ ├── components/
│ ├── layout/
│ ├── ui/
│ 
│
├── assets/ # Images, icons, logos


⚡ Performance Optimizations
 -> Route-level code splitting (React.lazy + Suspense)
 -> Lazy loading images (loading="lazy", decoding="async")
 -> Reduced re-renders using React.memo
 -> Optimized background layers and UI rendering
 -> Structured component architecture

📈 SEO Improvements
 -> Meta tags (title, description, keywords)
 -> Open Graph + Twitter tags
 -> Structured data (JSON-LD)
 -> Semantic HTML (header, main, section, footer)
 -> Accessible links and navigation

👨‍💻 Author:
Om Italiya

⭐ Conclusion

This project demonstrates production-level frontend development skills, including:
 -> Clean architecture
 -> Performance optimization
 -> Accessibility
 -> SEO best practices






 # .env.development
VITE_API_URL=http://localhost:backendport
VITE_SITE_URL=http://localhost:frontendport

# .env.production
VITE_API_URL= https://api.your-domain.com
VITE_SITE_URL= frontend deployment URL


# .env (backend)
PORT=PORT_NUMBER
MONGO_URI= mongodb srv URL
ALLOWED_ORIGINS=http://localhost:frontendport, frontend deployment URL
    