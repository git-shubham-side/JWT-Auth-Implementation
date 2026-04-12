# JWT Auth Implementation

A clean and beginner-friendly **JWT Authentication** project built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**.  
This application demonstrates how to implement **user signup, login, protected routes, logout**, **password hashing with bcrypt**, and **JWT-based authentication using cookies**.

## Overview

This project is a simple authentication system where users can:

- Create an account
- Log in securely
- Access a protected dashboard
- Log out by clearing the authentication token

It is designed as a practical starter project for learning authentication fundamentals in Node.js.

## Features

- User registration with hashed passwords
- User login with JWT token generation
- Token stored in **HTTP-only cookies**
- Protected dashboard route using custom middleware
- Logout functionality
- Server-side rendering with **EJS**
- MongoDB integration with **Mongoose**

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Templating Engine:** EJS
- **Other Tools:** cookie-parser, dotenv, nodemon

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
