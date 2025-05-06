# FriendBay Social Media Site

A modern social media platform built with Node.js, Express, and MongoDB.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/friendbay
   JWT_SECRET=your_jwt_secret_key_here
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

- `src/`
  - `controllers/` - Route controllers
  - `models/` - Database models
  - `routes/` - API routes
  - `middleware/` - Custom middleware
  - `config/` - Configuration files

## Features

- User authentication
- Social networking
- Post creation and interaction
- User profiles
- Friend connections

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt for password hashing 