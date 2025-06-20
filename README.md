# 🚖 UberClone - Ride Booking Platform

**UberClone** is a full-stack ride-booking web application inspired by Uber. It enables users to book rides, manage their profiles, and interact with captains (drivers). The app is built with **Node.js**, **Express**, and **MongoDB** for the backend, with planned frontend and map integrations.

---

## 📌 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🔐 Authentication](#-authentication)
- [🗺️ Maps Integration (Planned)](#-maps-integration-planned)
- [🚦 Setup & Installation](#-setup--installation)
- [📬 API Endpoints Overview](#-api-endpoints-overview)
- [💡 Future Enhancements](#-future-enhancements)
- [📸 Screenshots (Optional)](#-screenshots-optional)
- [📄 License](#-license)

---

## 🚀 Features

- 🔐 Secure user and captain authentication using JWT & cookies
- 👤 User registration, login, logout, and profile management
- 🧑‍✈️ Captain registration and login (admin-type role)
- 🧾 Token blacklist system for secure logout
- 📁 Organized MVC structure with separation of concerns
- 🗺️ Map integration for pickup & drop location (coming soon)
- 🛡️ Middleware for route protection and role checks

---

## 🛠️ Tech Stack

**Backend**  
- Node.js  
- Express.js  
- MongoDB (via Mongoose)  
- JWT (Authentication)  
- Cookie Parser  

**Planned Frontend**  
- React.js  
- Tailwind CSS  
- Mapbox / OpenStreetMap for Maps

---



## 📁 Project Structure

```
UBER-CLONE/
│
├── Backend/
│   ├── controllers/         # Route controllers
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── rideController.js
│   │   └── paymentController.js
│   ├── db/                  # Database connection
│   │   └── connection.js
│   ├── middlewares/         # Custom middleware
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── models/              # Mongoose models
│   │   ├── User.js
│   │   ├── Driver.js
│   │   ├── Ride.js
│   │   └── Payment.js
│   ├── routes/              # API routes
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── rides.js
│   │   └── payments.js
│   ├── services/            # Business logic
│   │   ├── emailService.js
│   │   ├── mapService.js
│   │   └── paymentService.js
│   ├── .env                 # Environment variables
│   ├── app.js               # Express app configuration
│   ├── server.js            # Server entry point
│   └── package.json
│
└── Frontend/
    ├── public/              # Static assets
    ├── src/
    │   ├── components/      # Reusable components
    │   │   ├── common/
    │   │   ├── forms/
    │   │   └── maps/
    │   ├── pages/           # Page components
    │   │   ├── auth/
    │   │   ├── rider/
    │   │   └── driver/
    │   ├── hooks/           # Custom React hooks
    │   ├── services/        # API services
    │   ├── utils/           # Utility functions
    │   ├── context/         # React context providers
    │   └── App.jsx          # Main app component
    ├── .env                 # Environment variables
    ├── index.html
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json
```

---

## 🔐 Authentication

- Users and captains are authenticated using **JWTs**
- Tokens are stored in **HTTP-only cookies**
- On logout, tokens are added to a **blacklist** collection to invalidate them
- Middleware checks for valid and non-blacklisted tokens for protected routes

---

## 🗺️ Maps Integration (Planned)

- Mapbox or OpenStreetMap will be used for:
  - Autocomplete address input
  - Pickup & drop location selection
  - Route directions & distance calculation


---


## 📬 API Endpoints Overview

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/upload-avatar` - Upload profile picture

### Rides
- `POST /api/rides/request` - Request a ride
- `GET /api/rides/active` - Get active rides
- `GET /api/rides/history` - Get ride history
- `PUT /api/rides/:id/accept` - Accept ride (driver)
- `PUT /api/rides/:id/start` - Start ride
- `PUT /api/rides/:id/complete` - Complete ride

### Payments
- `POST /api/payments/create-intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment
- `GET /api/payments/history` - Payment history

## 🧪 Testing

### Backend Testing
```bash
cd Backend
npm test
```

### Frontend Testing
```bash
cd Frontend
npm test
```


---


## 🚦 Setup & Installation

### 🔧 Prerequisites

- Node.js v16+
- MongoDB (local or Atlas)

### 📥 Clone the Repo

```bash
git clone https://github.com/rahul4work/uber-clone.git
cd uber-clone
```

### 📦 Install Dependencies
```bash
npm install
```

### ⚙️ Environment Variables (backend)
```bash
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret_key
```

### ⚙️ Environment Variable (frontend)
```bash
VITE_BASE_URL=http://localhost:5000
```

### ▶️ Run the Server for frontend
```bash
npm run dev
```

### ▶️ Run the Server for backend
```bash
npm start
```


---


## 💡 Future Enhancements
🗺️ Maps integration with live directions

🚘 Real-time ride matching

💳 Payment gateway integration

📱 Mobile-responsive frontend

🔔 Notification system

🧑‍💼 Admin dashboard

---


## 📸 Screenshots

| | | |
|---|---|---|
| ![Screenshot 2025-06-20 144141](https://github.com/user-attachments/assets/637dc70c-10b5-49d3-a1d9-27675f8cecf4) | ![Screenshot 2025-06-20 145706](https://github.com/user-attachments/assets/df961c80-ebe0-430e-9143-6c27cd33ef84) | ![Screenshot 2025-06-20 145745](https://github.com/user-attachments/assets/fb8b0778-f68c-49ca-bfbc-56d49d3e3a11) |
| ![Screenshot 2025-06-20 145947](https://github.com/user-attachments/assets/24694146-e929-466c-8060-aaa1e88bb03e) | ![Screenshot 2025-06-20 150015](https://github.com/user-attachments/assets/d1756ce5-5692-404e-8f3e-aa2d91b20721) | ![Screenshot 2025-06-20 150031](https://github.com/user-attachments/assets/780f9a7f-02b2-495d-9885-e72cb8f9108c) |
| ![Screenshot 2025-06-20 150052](https://github.com/user-attachments/assets/54bb4300-6386-4f58-88c4-e718fb6c1e44) | ![Screenshot 2025-06-20 150113](https://github.com/user-attachments/assets/fd7e62cb-b229-483c-ae4c-52336e826688) | ![Screenshot 2025-06-20 150244](https://github.com/user-attachments/assets/767dbeee-c7d2-44b1-a8f8-6ab9133bf7ac) |
| ![Screenshot 2025-06-20 150302](https://github.com/user-attachments/assets/4e4cda79-8df3-4034-b848-29446a765510) | ![Screenshot 2025-06-20 150354](https://github.com/user-attachments/assets/f0bbbf29-fff5-458b-895e-36f135dbf930) | ![Screenshot 2025-06-20 150424](https://github.com/user-attachments/assets/29086d0a-b070-4b85-96f7-bb60360d1436) | ![Screenshot 2025-06-20 150526](https://github.com/user-attachments/assets/cce624e1-7da4-4383-b2fd-d958a6ad7b63) | ![Screenshot 2025-06-20 150541](https://github.com/user-attachments/assets/2acbe149-b677-451c-a389-616987975e90) | ![Screenshot 2025-06-20 150552](https://github.com/user-attachments/assets/6ea0bc90-70ad-4a9e-b612-7ba9381022ff) | ![Screenshot 2025-06-20 181234](https://github.com/user-attachments/assets/e3e343b2-78e8-485f-8247-94736ed915f8)

---


## ❤️ Contribute
If you'd like to improve this project, feel free to fork and submit a PR!
Feedback and ideas are always welcome 😄

---


## 📞 Feel free to contact us

**👤 Rahul Kumar**  
📧 Email: [heyyrj98@gmail.com](mailto:heyyrj98@gmail.com)  
💻 GitHub: [@rahul4work](https://github.com/rahul4work)



