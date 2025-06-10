# Professional Blog - MERN Stack Website

A professional blog platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) designed to promote services, enhance online visibility, and engage a wider audience through a sleek, responsive interface.

**Target Audience:** Freelancers, consultants, service providers, and small businesses looking to grow their digital presence.

## Table of Contents

- [Professional Blog - MERN Stack Website](#professional-blog---mern-stack-website)
  - [Table of Contents](#table-of-contents)
    - [General Info](#general-info)
    - [Screenshot](#screenshot)
      - [Home page](#home-page)
      - [About page](#about-page)
      - [Login page](#login-page)
      - [Register page](#register-page)
      - [Services page](#services-page)
      - [Panier page](#panier-page)
      - [Order page](#order-page)
      - [Admin page](#admin-page)
  - [Requirements](#requirements)
  - [Installation guide](#installation-guide)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
    - [Backend and Frontend `.env` example](#backend-and-frontend-env-example)
  - [Admin Account](#admin-account)
  - [Collaboration](#collaboration)
  - [License](#license)

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

### Screenshot

#### Home page

<div align="center">
<img src="![coaching_home](https://github.com/user-attachments/assets/88580fe3-4d9c-4630-8d03-8fb6037e58ac)" width="40%">
</div>

#### About page

<div align="center">
<img src="![coaching_about](https://github.com/user-attachments/assets/a301fd5f-5f69-4177-a5db-68bc685f54fd)" width="40%">
</div>

#### Login page

<div align="center">
<img src="![coaching_login](https://github.com/user-attachments/assets/dc2e235d-f4a8-485c-be03-47fa287b2c68)" width="40%">
</div>

#### Register page

<div align="center">
<img src="![coaching_register](https://github.com/user-attachments/assets/99e1d0c1-1c07-4d91-8905-d960c8bbedf0)" width="40%">
</div>

#### Services page

<div align="center">
<img src="![coaching_services](https://github.com/user-attachments/assets/48e67f0a-9268-44a6-83de-384a3f05ae7f)" width="40%">
</div>

#### Panier page

<div align="center">
<img src="![coaching_services_panier](https://github.com/user-attachments/assets/70991c48-f87f-4283-a233-f3cd2183c266)" width="40%">
</div>

<div align="center">
<img src="![coaching_panier](https://github.com/user-attachments/assets/13920457-0d24-4bc7-b4d4-0176a12991c4)" width="40%">
</div>

#### Order page

<div align="center">
<img src="![coaching_order](https://github.com/user-attachments/assets/787812ed-7005-4be4-bc6e-04f9ec6a1f56)" width="40%">
</div>

#### Admin page

<div align="center">
<img src="![coaching_admin](https://github.com/user-attachments/assets/f7ec620a-d8b0-406b-beea-91a984695761)" width="40%">
</div>

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
git clone https://github.com/YAVI-DEV/ProjetCoaching.git
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
| PORT | Backend port (default: 6000) |
| BASE_URL | Backend port (http://localhost:6000) |
| BASE_URL_ORIGIN | Frontend port (http://localhost:6000) |
| JWT_SECRET | Key used for token encryption |
| DB_URI | MongoDB connection string |
| --- | --- |
| REACT_APP_API | Frontend port (http://localhost:8000) |

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