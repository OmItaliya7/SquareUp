# ⚙️ SquareUp Backend – API Server

This is the backend for **SquareUp**, built with Node.js, Express, and MongoDB.  
It handles **contact form submissions **.

## 🚀 Features

- 📩 Contact form API
- 🔒 Rate limiting & security (Helmet)
- 🌐 CORS configuration
- 🗄️ MongoDB integration
- Security and Privacy

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Helmet**
- **Express Rate Limit**

## 📂 Folder Structure

backend/
│
├── config/ # DB & Cloudinary config
├── models/ # Mongoose schemas
├── routes/ # API routes
├── server.js # Entry point

## ⚙️ Environment Variables

# .env (backend)
PORT=PORT_NUMBER
MONGO_URI= mongodb srv URL
ALLOWED_ORIGINS=http://localhost:frontendport, frontend deployment URL

📡 API Endpoints

📩 Contact
POST /contact

Body : {
  name,
  email,
  message,
  services,
  budget
}

🔒 Security Features
-> Rate limiting (prevents spam)
-> Helmet (secure headers)
-> CORS protection

⭐ Note

This backend is designed with scalability and security in mind, suitable for production deployment.