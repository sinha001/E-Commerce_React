# E-Commerce MERN Application 🌐🌟🚀

This repository contains a full-stack E-Commerce application built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. The application allows users to sign up, log in, manage products, and perform various e-commerce functionalities. 📈🛠️🔐

## Project Structure 🛏️🔧🌐

```
sinha001-e-commerce_react/
├── backend/                # Backend (Node.js + Express.js)
│   ├── index.js           # Entry point for the backend server
│   ├── package.json       # Backend dependencies
│   ├── .gitignore         # Ignored backend files
│   └── db/                # Database models and configurations
│       ├── Product.js     # Product schema
│       ├── User.js        # User schema
│       └── config.js      # MongoDB configuration
├── front-end/              # Frontend (React.js)
│   ├── public/            # Static files
│   │   ├── index.html     # HTML template
│   │   ├── manifest.json  # PWA manifest
│   │   └── robots.txt     # Robots directive
│   ├── src/               # React components and logic
│   │   ├── App.js         # Main application component
│   │   ├── components/    # Reusable components
│   │   │   ├── AddProduct.js
│   │   │   ├── Footer.js
│   │   │   ├── Login.js
│   │   │   ├── Nav.js
│   │   │   ├── PrivateComponent.js
│   │   │   ├── Products.js
│   │   │   ├── SignUp.js
│   │   │   └── UpdateProduct.js
│   ├── package.json       # Frontend dependencies
│   ├── README.md          # Frontend-specific README
├── vercel.json             # Vercel deployment configuration
```

## Features 🔄🛠️🌐

### Backend 🔐🔄📝

- RESTful API built with Express.js.
- MongoDB as the database (connected via Mongoose).
- JWT-based authentication for secure user sessions.
- User and product management APIs.

### Frontend 🌈🔍💡

- React.js for a responsive and interactive user interface.
- Functional components with hooks for state management.
- User authentication flow (signup and login).
- Product management (add, update, and view products).

## Installation 🛠️🔧🚀

### Prerequisites 🔄🛠️🌐

Ensure you have the following installed on your machine:

- Node.js (v14+)
- npm (Node Package Manager)
- MongoDB (or access to MongoDB Atlas)

### Steps to Run Locally 🛠️🔄💻

#### Backend 🌐🔧🔐

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
4. Start the server:
   ```bash
   node index.js
   ```
   The backend will be available at `http://localhost:5000`. 🚀🔧🌐

#### Frontend 🌈🔧🔄

1. Navigate to the `front-end` directory:
   ```bash
   cd front-end
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will be available at `http://localhost:3000`. 🚀🔍🌐

## Deployment 🌐🔄🚀

This project is set up to be deployed on Vercel. Follow these steps:

### Backend Deployment 🔧🚀🔐

1. Move the `backend` folder to `api` for Vercel compatibility.
2. Add a `vercel.json` file to configure the serverless functions:
   ```json
   {
     "version": 2,
     "builds": [
       { "src": "api/index.js", "use": "@vercel/node" }
     ],
     "routes": [
       { "src": "/api/(.*)", "dest": "api/index.js" }
     ]
   }
   ```
3. Push the changes to GitHub and link the repository to Vercel.
4. Set environment variables (`MONGO_URI`, `JWT_SECRET`) in the Vercel dashboard.

### Frontend Deployment 🌈🌐🔧

1. In the `front-end` directory, ensure API calls use an environment variable for the backend URL:
   ```javascript
   const API_URL = process.env.REACT_APP_BACKEND_URL;
   ```
2. Add a `vercel.json` file to configure the React app:
   ```json
   {
     "version": 2,
     "builds": [
       { "src": "front-end/package.json", "use": "@vercel/static-build" }
     ],
     "routes": [
       { "src": "/(.*)", "dest": "front-end/build/$1" }
     ]
   }
   ```
3. Push the changes to GitHub and deploy to Vercel.
4. Set environment variables (`REACT_APP_BACKEND_URL`) in the Vercel dashboard. 🔧🔄🛠️

## Technologies Used 🌐🔄🚀

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Token (JWT)
- **Deployment**: Vercel 🛠️🔄🔐

## Contributing 📚🔧🚀

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request. 🌐🔧🔄

## License 🔒🌐📚

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 🔐🌐🚀

---

Feel free to contribute or suggest improvements! 🚀🔄📚



