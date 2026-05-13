# 🍔 Full Stack Food Delivery App

A complete food ordering web application built with the MERN stack and Stripe payment integration.

🌐 **Live Demo:** [https://food-delivery-frontend-psi-six.vercel.app](https://food-delivery-frontend-psi-six.vercel.app)
<!-- Replace with your frontend Vercel URL above -->

---

## Features

- Browse and search food menu items
- User authentication — register and login
- Shopping cart — add, remove, and update items
- Place orders with Stripe payment gateway
- Order tracking with status updates
- Admin panel to manage menu items and orders

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, React Router, Axios |
| Admin Panel | React.js, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Payments | Stripe |
| Auth | JWT + bcrypt |

## Project Structure

```
food-delivery-app/
├── frontend/   # Customer-facing React app
├── admin/      # Admin panel React app
└── backend/    # Express REST API
```

## Local Development

**1. Clone the repo and install dependencies**
```bash
# Backend
cd backend && npm install

# Frontend
cd frontend && npm install

# Admin
cd admin && npm install
```

**2. Configure backend `.env`**
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

**3. Configure frontend and admin `.env`**
```env
VITE_API_URL=http://localhost:4000
```

**4. Run all three servers**
```bash
# Backend (port 4000)
cd backend && npm run server

# Frontend (port 5173)
cd frontend && npm run dev

# Admin (port 5174)
cd admin && npm run dev
```

> **Note:** MongoDB Atlas requires your IP to be whitelisted under Network Access. If using Node.js v24 on Windows, switch to v20 LTS to avoid a DNS resolution bug.
