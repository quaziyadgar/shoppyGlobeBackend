# ShoppyGlobe Backend

Welcome to the backend API for ShoppyGlobe, a modern e-commerce application. This project provides a robust RESTful API built with Node.js, Express.js, and MongoDB, designed to support product management, cart operations, and user authentication. The codebase uses ES Modules for modularity and follows a controller-based architecture for scalability.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Product Management**: Fetch all products or details of a single product.
- **Cart Management**: Add, update, and remove items from the shopping cart with authentication.
- **User Authentication**: Register new users and log in with JWT-based authentication.
- **Error Handling**: Robust error handling for API requests.
- **Modular Design**: Separated routes, routers, and controllers for maintainability.

## Technologies
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing products, carts, and users.
- **Mongoose**: ODM for MongoDB interaction.
- **jsonwebtoken**: For secure JWT-based authentication.
- **bcryptjs**: For password hashing.
- **dotenv**: For environment variable management.
- **cors**: For enabling cross-origin resource sharing.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or remote instance)
- npm (comes with Node.js)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/shoppyglobe-backend.git
   cd shoppyglobe-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     MONGO_URI=mongodb://localhost:27017/shoppyglobe
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```
   - Replace `your_jwt_secret_key` with a secure random string.

4. **Initialize MongoDB**
   - Ensure MongoDB is running locally (`mongod`) or update `MONGO_URI` to point to your remote MongoDB instance.

## API Documentation

### Base URL
`http://localhost:5000`

### Authentication
- All cart routes require a valid JWT token in the `Authorization` header: `Bearer <token>`.
- Obtain a token via the `/auth/login` endpoint.

#### Authentication Endpoints
- **POST /auth/register**
  - **Description**: Register a new user.
  - **Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```
  - **Response**: 
    - Success: `{"token": "<jwt_token>"}`
    - Error: `{"message": "User already exists"}` (400)

- **POST /auth/login**
  - **Description**: Log in an existing user.
  - **Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```
  - **Response**: 
    - Success: `{"token": "<jwt_token>"}`
    - Error: `{"message": "Invalid credentials"}` (400)

#### Product Endpoints
- **GET /products**
  - **Description**: Fetch all products.
  - **Response**: Array of product objects.
  - **Example**:
    ```json
    [
      {
        "_id": "67f4d08607249acde5457d79",
        "name": "Sample Product",
        "price": 29.99,
        "description": "A great product",
        "stock": 100
      }
    ]
    ```

- **GET /products/:id**
  - **Description**: Fetch a single product by ID.
  - **Parameters**: `id` (product ID)
  - **Response**: Product object or `{"message": "Product not found"}` (404)

#### Cart Endpoints
- **POST /cart**
  - **Description**: Add a product to the cart.
  - **Headers**: `Authorization: Bearer <token>`
  - **Body**:
    ```json
    {
      "productId": "67f4d08607249acde5457d79",
      "quantity": 1
    }
    ```
  - **Response**: Updated cart object.

- **PUT /cart/:id**
  - **Description**: Update the quantity of a cart item.
  - **Headers**: `Authorization: Bearer <token>`
  - **Parameters**: `id` (item ID)
  - **Body**:
    ```json
    {
      "quantity": 50
    }
    ```
  - **Response**: Updated cart object or `{"message": "Item not found"}` (404)

- **DELETE /cart/:id**
  - **Description**: Remove an item from the cart.
  - **Headers**: `Authorization: Bearer <token>`
  - **Parameters**: `id` (item ID)
  - **Response**: Updated cart object or `{"message": "Cart not found"}` (404)

## Testing
- **Tool**: Use ThunderClient (VS Code extension) or Postman.
- **Steps**:
  1. Test authentication endpoints (`/auth/register`, `/auth/login`) to obtain a token.
  2. Use the token to test protected endpoints (`/cart/*`) with appropriate headers.
  3. Include screenshots of successful requests and MongoDB data in the repository for submission.

## Project Structure
```
shoppyglobebackend/
├── controllers/          # Business logic for CRUD operations
│   ├── productController.js
│   ├── cartController.js
│   ├── authController.js
├── models/              # Mongoose schemas
│   ├── Product.js
│   ├── Cart.js
│   ├── User.js
├── routes/              # Route handlers
│   ├── product/
│   │   ├── getProducts.js
│   │   ├── getProductById.js
├── routers/             # Route registration
│   ├── productRouter.js
│   ├── cartRouter.js
│   ├── authRouter.js
├── middleware/          # Authentication middleware
│   ├── auth.js
├── .env                # Environment variables
├── index.js            # Entry point
├── package.json        # Project metadata and dependencies
```

## Environment Variables
- `MONGO_URI`: MongoDB connection string (e.g., `mongodb://localhost:27017/shoppyglobe`).
- `JWT_SECRET`: Secret key for JWT signing (keep secure).
- `PORT`: Server port (default: 5000).

## Running the Project
1. Install dependencies and set up the environment as described in [Installation](#installation).
2. Start the server:
   ```bash
   npm run dev
   ```
3. Access the API at `http://localhost:5000`.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.


### Customization Tips
- **GitHub Link**: Replace `https://github.com/quaziyadgar/shoppyglobebackend.git` with your actual repository URL.
- **Screenshots**: Add a section or link to a folder with ThunderClient/MongoDB screenshots if required for submission.
- **Additional Endpoints**: Include any custom endpoints you’ve added.
- **License File**: Create a `LICENSE` file with the MIT License text if you choose to use it.
