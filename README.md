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

### Home Page and 👤 User Interface
<div align="center">

| Home Page | User Login | New user Registration |
|:---:|:---:|:---:|
| ![User Login](https://github.com/user-attachments/assets/637dc70c-10b5-49d3-a1d9-27675f8cecf4) | ![User Home](https://github.com/user-attachments/assets/df961c80-ebe0-430e-9143-6c27cd33ef84) | ![Trip Booking](https://github.com/user-attachments/assets/fb8b0778-f68c-49ca-bfbc-56d49d3e3a11) |

| Enter location | Showing suggested locations | Ride selection|
|:---:|:---:|:---:|
| ![Ride Options](https://github.com/user-attachments/assets/24694146-e929-466c-8060-aaa1e88bb03e) | ![Payment](https://github.com/user-attachments/assets/d1756ce5-5692-404e-8f3e-aa2d91b20721) | ![History](https://github.com/user-attachments/assets/780f9a7f-02b2-495d-9885-e72cb8f9108c) |

| Confirm Ride | Looking for driver |
|:---:|:---:|
| ![Screenshot 2025-06-20 150052](https://github.com/user-attachments/assets/fa2df255-a44d-46fc-b877-2dfc54fb068a) | ![Screenshot 2025-06-20 150113](https://github.com/user-attachments/assets/f9ffbb8c-497e-42ec-80ad-de90f9c51217) |

</div>

### 🚗 Captain Interface
<div align="center">

| Captain Login | New captain registration | captain Profile |
|:---:|:---:|:---:|
| ![Screenshot 2025-06-20 150244](https://github.com/user-attachments/assets/b33fb885-6589-44f0-868c-576f2323a2df) | ![Screenshot 2025-06-20 150302](https://github.com/user-attachments/assets/97db8878-4bb6-4741-82c9-e9461db66480) | ![Screenshot 2025-06-20 150354](https://github.com/user-attachments/assets/bba69793-6fcf-49f0-ae3b-594e0b529fb3) |

| Accepting User | Confirm User with Otp | Complete Ride |
|:---:|:---:|:---:|
| ![Screenshot 2025-06-20 150424](https://github.com/user-attachments/assets/2b08f389-d9a1-484d-a041-7aa3f75a72cb) | ![Screenshot 2025-06-20 150526](https://github.com/user-attachments/assets/c6f84734-288e-42bb-b852-fd13cf78af8c) | ![Screenshot 2025-06-20 150541](https://github.com/user-attachments/assets/4072cd90-505e-4bac-99e8-fc63d0425230) |

| Finish Ride |
|:---:|
| ![Screenshot 2025-06-20 150552](https://github.com/user-attachments/assets/b6372ab3-bbaf-4e2e-8c1e-0e021c97782f) |


---


## ❤️ Contribute
If you'd like to improve this project, feel free to fork and submit a PR!
Feedback and ideas are always welcome 😄

---


## 📞 Feel free to contact us

**👤 Rahul Kumar**  
📧 Email: [heyyrj98@gmail.com](mailto:heyyrj98@gmail.com)  
💻 GitHub: [@rahul4work](https://github.com/rahul4work)



