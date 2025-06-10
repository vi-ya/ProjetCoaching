# Professional Blog - MERN Stack Website

A professional blog platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) designed to promote services, enhance online visibility, and engage a wider audience through a sleek, responsive interface.

**Target Audience:** Freelancers, consultants, service providers, and small businesses looking to grow their digital presence.

## Table of Contents

- [Professional Blog - MERN Stack Website](#professional-blog---mern-stack-website)
  - [Table of Contents](#table-of-contents)
    - [General Info](#general-info)
  - [Requirements](#requirements)
  - [Installation guide](#installation-guide)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
    - [Backend and Frontend `.env` example](#backend-and-frontend-env-example)
  - [Admin Account](#admin-account)
  - [Collaboration](#collaboration)
  - [License](#license)
   - [Screenshot](#screenshot)
      - [Home page](#home-page)
      - [About page](#about-page)
      - [Login page](#login-page)
      - [Register page](#register-page)
      - [Services page](#services-page)
      - [Cart page](#cart-page)
      - [Order page](#order-page)
      - [Admin page](#admin-page)

### General Info

**Project Status:** Work in Progress 🚧

This site is a functional blog designed with both presentation and management in mind. It includes:

- A secure authentication system (JWT, bcrypt)
- A responsive frontend (mobile/tablet/desktop)
- Admin dashboard for content and service management
- Four core homepage sections: Advertisement, Services, Expertise, Consultation

Planned enhancements include:

- Blog post search and categorization
- Multilingual support
- Integration with third-party analytics and email services

## Requirements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation guide

Clone the repository:

```bash
git clone https://github.com/vi-ya/ProjetCoaching.git
cd ProjetCoaching

```

### Backend Setup

```bash
cd backend
npm install
npm start 

```

### Frontend Setup

```bash
cd ../frontend
npm install
npm start

```
The site will be accessible at `http://localhost:8000`

## Environment Variables

Create a `.env` file in both the `backend/` and `frontend/` directories.

### Backend and Frontend `.env` example

| Variable | Description |
| --- | --- |
| PORT | Backend port default (6000) |
| BASE_URL | Backend port (http://localhost:6000/) |
| BASE_URL_ORIGIN | Frontend port (http://localhost:5000) |
| JWT_SECRET | Key used for token encryption |
| DB_URI | MongoDB connection string |
| --- | --- |
| REACT_APP_API | Backend port (http://localhost:6000) |

Copy **env_example**  you will need to rename it **.env** Inside there, you can fill in the values of the environment variables (backend and frontend).

## Admin Account
There is no default admin account created automatically.

To create one:

Register a user via the registration page (/register).

Go into your MongoDB database and update the user's role manually:

`db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "Admin" } }
)`


You can also use MongoDB Compass or create a protected route to elevate roles.

## Collaboration

Feel free to fork, contribute, or open issues and pull requests. Your help is appreciated whether it's fixing bugs, optimizing performance, or improving UI/UX.

## License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute it under the terms outlined in the LICENSE file.

## Screenshot

<div align="center">
<h4>Home page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_home.jpg" alt="coaching_home" >
</div>

<div align="center">
<h4>About page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_about.png" alt="coaching_about" >
</div>

<div align="center">
<h4>Login page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_login_error.png" alt="coaching_login_error" >
</div>

<div align="center">
<h4>Register page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_register.png" alt="coaching_register">
</div>

<div align="center">
<h4>Services page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_services.png" alt="coaching_services" >
</div>

<div align="center">
<h4>Cart page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_services_panier.png" alt="coaching_servives_cart" >
</div>

<div align="center">
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_panier.jpg" alt="coaching_cart" >
</div>

<div align="center">
<h4>Order page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_order.png" alt="coaching_order" >
</div>

<div align="center">
<h4>Admin page</h4>
<img src="https://github.com/vi-ya/ProjetCoaching/blob/573d75eccdac178ea409356d710ec85c0237a7ea/resources/images/coaching_admin.png" alt="coaching_admin" >
</div>
