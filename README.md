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





   # LostFinder - Backend Service

## Purpose
The backend service provides the data and authentication layer for "LostFinder," ensuring secure, reliable, and scalable operations.

## Project Overview
LostFinder's backend is a Node.js application that offers RESTful APIs to power the frontend. It handles database interactions, user authentication, and data management.

## Key Features
- Token-based authentication for secure access.
- CRUD operations for managing items and users.
- Middleware for validating and sanitizing data inputs.

## API Endpoints
| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| GET    | `/items`          | Retrieve all items         |
| POST   | `/items`          | Add a new item            |
| GET    | `/items/:id`      | Retrieve a specific item  |
| PUT    | `/items/:id`      | Update an item            |
| DELETE | `/items/:id`      | Delete an item            |

## Technologies Used
- Node.js
- Express.js
- MongoDB

## npm Packages Used
- `express`
- `bcryptjs`: For password encryption.
- `multer`: For handling file uploads.
- `cors`: For handling cross-origin requests.

## Additional Points
- **Scalability**: Designed to handle large amounts of data efficiently.
- **Real-time Notifications**: Using Firebase for live updates.
- **Security Features**: Data sanitization and HTTPS support.

---




# LostFinder - API Service

## Purpose
The API backend enables secure data handling and provides the core functionalities needed for the LostFinder platform. It ensures data integrity and user authentication.

## Project Overview
The backend architecture ensures fast and reliable API responses, making the user experience seamless. It supports all major functionalities like CRUD operations and authentication.

## Key Features
- Database integration with MongoDB for efficient storage.
- Secure login using JWT authentication.
- Optimized endpoints for faster responses.

## API Endpoints
| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/api/users`     | Fetch all users          |
| POST   | `/api/users`     | Register a new user      |
| GET    | `/api/items`     | Retrieve all items       |
| POST   | `/api/items`     | Post a lost/found item   |
| DELETE | `/api/items/:id` | Remove a lost/found item |

## Technologies Used
- Node.js
- Express.js
- MongoDB

## npm Packages Used
- `dotenv`: For environment variable management.
- `jsonwebtoken`: For user authentication.
- `mongoose`: For schema-based database operations.

---




# LostFinder - Backend Service

## Purpose
The backend of "LostFinder" acts as the backbone of the application, handling secure authentication, item management, and API interactions. It ensures smooth client-server communication.

## Project Overview
Built with Node.js and Express.js, the server is designed for scalability and performance. It provides a robust data structure for managing lost and found items, user profiles, and notifications.

## Key Features
- JWT-based secure authentication.
- RESTful API for all CRUD operations.
- MongoDB integration for scalable data storage.

## API Overview
The backend offers endpoints for managing users, items, and interactions between users.

## API Endpoints
| Method | Endpoint             | Description                        |
|--------|----------------------|------------------------------------|
| POST   | `/auth/signup`       | Register a new user               |
| POST   | `/auth/login`        | User authentication               |
| GET    | `/items`             | Get all lost/found items          |
| POST   | `/items`             | Post a new lost/found item        |
| PUT    | `/items/:id`         | Update an existing item           |
| DELETE | `/items/:id`         | Delete an item                    |

## Technologies Used
- Node.js
- Express.js
- MongoDB

## npm Packages Used
- `cors`: Handling Cross-Origin Requests.
- `express-validator`: Validating incoming requests.
- `multer`: For image uploads.

---



# LostFinder - API

## Purpose
The backend powers the "LostFinder" platform with secure APIs and database management, ensuring data integrity and smooth client interactions.

## Project Overview
The server is designed to handle authentication, item management, and real-time notifications, forming the backbone of the platform.

## Key Features
- RESTful APIs for client-server communication.
- JWT-based authentication.
- Efficient database schemas for item records.

## API Overview
The API handles all data and user interactions, including item postings, user authentication, and notifications.

## API Endpoints
| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| POST   | `/auth/signup`      | User registration               |
| POST   | `/auth/login`       | User login                      |
| GET    | `/items`            | Retrieve lost/found items       |
| PUT    | `/items/:id`        | Update item details             |
| DELETE | `/items/:id`        | Delete an item                  |

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Firebase

## npm Packages Used
- `express`
- `jsonwebtoken`
- `mongoose`
- `multer`



# LostFinder - Server Side

## Purpose
The server-side of "LostFinder" powers the backend, managing data, authentication, and API endpoints to ensure a smooth and secure user experience.

## Project Overview
LostFinder's server is built with Node.js and Express, focusing on reliability, scalability, and secure data management.

## Key Features
- RESTful API design for smooth client-server interaction.
- Authentication using JWT.
- Database integration for lost and found item records.

## API Overview
The API supports CRUD operations for managing items, users, and notifications. It ensures secure data flow between the client and server.

## API Endpoints
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| GET    | `/items`         | Fetch all items                  |
| POST   | `/items`         | Create a new lost/found item     |
| GET    | `/items/:id`     | Fetch a single item by ID        |
| PUT    | `/items/:id`     | Update an item                   |
| DELETE | `/items/:id`     | Delete an item                   |

## Technologies Used
- Node.js
- Express.js
- MongoDB

## npm Packages Used
- `jsonwebtoken`
- `mongoose`
- `cors`
- `dotenv`

---


# LostFinder - Backend

## Purpose
The backend for "LostFinder" provides API endpoints and manages the core data operations required to run the platform efficiently.

## Project Overview
Built with a Node.js and MongoDB stack, the backend ensures secure, scalable, and fast data operations, supporting the frontend's needs.

## Key Features
- User authentication and authorization.
- Endpoints for managing lost and found items.
- Optimized database queries for efficient searches.

## API Overview
LostFinder's API provides endpoints for item and user management with secure and reliable data handling.

## API Endpoints
| Method | Endpoint          | Functionality                     |
|--------|-------------------|-----------------------------------|
| GET    | `/api/users`      | Retrieve all users               |
| POST   | `/api/users/login`| Authenticate user login          |
| GET    | `/api/items`      | Get all lost/found items         |
| POST   | `/api/items`      | Add a new lost/found item        |

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Firebase (for notifications)

## npm Packages Used
- `bcryptjs` for password hashing.
- `jsonwebtoken` for token-based authentication.
- `multer` for file uploads.
- `express-validator` for request validation.

---
