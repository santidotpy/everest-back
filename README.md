# everest-back

> [!NOTE]  
> Check the frontend for Everest [here](https://github.com/santidotpy/everest-front).


## Table of Contents

- [Installation](#-installation)
- [General Information](#general-information)
- [Endpoints](#endpoints)
  - [Sessions](#sessions)
    - [Current Session](#current-session)
    - [Login](#login)
    - [Register](#register)
    - [Logout](#logout)
  - [Users](#users)
    - [Get Users](#get-users)
  - [Products](#products)
    - [Get Products](#get-products)
    - [Create Product](#create-product)
    - [Update Product](#update-product)
    - [Delete Product](#delete-product)
  - [Carts](#carts)
    - [Get Carts](#get-carts)




## 💻 Installation

```sh
npm i
```

#### Run server

```sh
npm run dev
```

#### 🧪 Run tests

```sh
npm run tests
```


## General Information
Backend implementation for an e-commerce platform built using Node.js, MongoDB, and Express.js


- **API Base URL**: `http://localhost:3000/api`
- **Authentication**: Bearer token required for all secured endpoints.


## Endpoints

### Sessions

#### Current Session
- **Endpoint**: `GET /session/current`
- **Description**: Retrieves the current session information.
- **Authorization**: Bearer token required.

#### Login
- **Endpoint**: `POST /session/login`
- **Description**: Authenticates a user and initiates a session.
- **Body**:
  ```json
  {
    "email": "example@mail.com",
    "password": "greatpassw0rd"
  }
  ```

#### Register
- **Endpoint**: `POST /session/register`
- **Description**: Registers a new user.
- **Body**:
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "age": 30,
    "email": "john.doe@mail.com",
    "password": "greatpassw0rd"
  }
  ```

#### Logout
- **Endpoint**: `GET /session/logout`
- **Description**: Logs out the current session.
- **Authorization**: Bearer token required.

### Users

#### Get Users
- **Endpoint**: `GET /users`
- **Description**: Retrieves a list of all users.
- **Authorization**: Bearer token required.

### Products

#### Get Products
- **Endpoint**: `GET /products`
- **Description**: Retrieves a list of products with optional query parameters.
- **Parameters**:
  - `limit` (optional): Limits the number of returned products.
  - `page` (optional): Specifies the page of results to return.
  - `sort` (optional): Sorts results based on specified criteria.
  - `category` (optional): Filters results by category.

#### Create Product
- **Endpoint**: `POST /products`
- **Description**: Creates a new product.
- **Authorization**: Bearer token required.
- **Body**:
  ```json
  {
    "productName": "Example Product",
    "description": "Product description here",
    "price": 100,
    "stock": 50,
    "code": "EX123",
    "category": "Example Category"
  }
  ```

#### Update Product
- **Endpoint**: `PUT /products`
- **Description**: Updates product details.
- **Authorization**: Bearer token required.
- **Body**:
  ```json
  {
    "id": "product_id",
    "thumbnail": "https://image.url/thumbnail.jpg",
    "stock": 100
  }
  ```

#### Delete Product
- **Endpoint**: `DELETE /products`
- **Description**: Deletes a product.
- **Authorization**: Bearer token required.
- **Parameters**:
  - `id` (required): The ID of the product to delete.

### Carts

#### Get Carts
- **Endpoint**: `GET /carts`
- **Description**: Retrieves a list of user carts.
- **Authorization**: Bearer token required.

## Example Usage

### Fetch Products with Sorting and Limit

```bash
curl -X GET "http://localhost:3000/api/products?limit=10&sort=asc" -H "Authorization: Bearer <token>"
```

### Register a New User

```bash
curl -X POST "http://localhost:3000/api/session/register" -H "Content-Type: application/json" -d '{
  "first_name": "Jane",
  "last_name": "Doe",
  "age": 28,
  "email": "jane.doe@mail.com",
  "password": "password123"
}'
```
