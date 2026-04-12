# JWT Auth Implementation

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens)]
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)

---

## Overview

This project is a complete authentication system built using Node.js, Express.js, MongoDB, and JSON Web Tokens.  
It demonstrates secure user authentication with signup, login, protected routes, and cookie-based session handling.

---

## Features

- User registration with secure password hashing (bcrypt)
- User login with JWT token generation
- Token stored in HTTP-only cookies
- Protected routes using authentication middleware
- Logout functionality by clearing authentication cookies
- Server-side rendering using EJS
- MongoDB integration using Mongoose

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- EJS
- cookie-parser
- dotenv

---

## Project Structure


## Project Structure

```bash
JWT-Auth-Implementation/
│
├── controllers/
│   ├── login_controller.js
│   └── signup_controller.js
│
├── middlewares/
│   └── middleware
│
├── models/
│   └── user.js
│
├── public/
│
├── routes/
│   ├── login.js
│   └── signup.js
│
├── views/
│   ├── dashboard.ejs
│   ├── index.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Authentication Flow

### Registration
User submits email and password → password is hashed → stored in MongoDB

### Login
User credentials verified → JWT token generated → stored in cookie

### Protected Routes
Middleware checks token → verifies → allows or denies access

### Logout
Authentication cookie is cleared

---

## Installation

### Clone Repository

```bash
git clone https://github.com/git-shubham-side/JWT-Auth-Implementation.git
cd JWT-Auth-Implementation
npm install
npm start
