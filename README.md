# FundSphere Server-Side 🚀

## 📄 Project Overview

**Welcome to FundSphere - A Crowd Funding Application !!!** The server-side implementation of **FundSphere** designed to help users create, manage and contribute to campaigns effectively. The server manages the backend logic, database interactions and API endpoints for campaign and donation management. Built with Node.js and Express.js, it ensures secure and efficient communication between the client and the database. This project ensures secure and scalable server-side operations, built with modern tools and best practices.

---

---

## 🌐 Live Site
Check out the live demo here: [FundSphere Live Site](https://b10-assignment-10-6b3b9.web.app/)

---

## 💻 Key Functionalities
- **Campaign Management**  
  - Create, update, delete, and fetch campaigns.  
  - Filter campaigns based on their deadlines.  

- **User Management**  
  - Manage user data and authentication-related operations.
  - Maintain a user database with secure data handling. 

- **Donation Services**
  - Record and fetch user donations efficiently.
  - Save and retrieve donation records.  

- **API-First Design**  
  - RESTful API endpoints for seamless integration with the client side. 

---

## 🌟 Features

- RESTful API with CRUD operations for campaigns and donations.
- Secure data storage and retrieval using MongoDB.
- Protected routes for authorized access to sensitive operations.
- Data validation and error handling for seamless operations.
- Clean and maintainable code with modular architecture.
- Sorting and filtering capabilities for campaign management.

---

## 🛠️ Technologies Used

- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Admin SDK
- **Deployment**: Vercel
- **Environment Management**: dotenv
- **Cross-Origin Resource Sharing**: cors

---

## ✨ API Overview

### **Campaign APIs**
- `GET /campaigns` - Fetch all campaigns.  
- `GET /runningCampaigns` - Fetch campaigns with future deadlines.  
- `POST /campaigns` - Add a new campaign.  
- `PATCH /campaigns/:id` - Update campaign details.  
- `DELETE /campaigns/:id` - Delete a campaign.  

### **User APIs**
- `POST /users` - Create a new user.  
- `PATCH /users` - Update user data.  
- `GET /users` - Fetch all users.  

### **Donation APIs**
- `POST /donations` - Record a donation.  
- `GET /myDonations` - Fetch donations by user email.  

---

## 📋 API Endpoints

| Method | Endpoint           | Description                                 |
|--------|--------------------|---------------------------------------------|
| GET    | `/campaigns`       | Fetch all campaigns.                        |
| GET    | `/runningCampaigns`| Fetch campaigns with active deadlines.      |
| GET    | `/campaign/:id`    | Fetch a campaign by ID.                     |
| POST   | `/campaigns`       | Add a new campaign.                         |
| PATCH  | `/campaigns/:id`   | Update an existing campaign.                |
| DELETE | `/campaigns/:id`   | Delete a campaign.                          |
| GET    | `/myCampaigns`     | Fetch campaigns created by a specific user. |
| POST   | `/donations`       | Record a donation.                          |

---

## 🔧 Installation and Usage

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/fundsphere-server.git
   cd fundsphere-server