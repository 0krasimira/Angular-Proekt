# Artist's Ally - Angular Web Application

## Overview
**Artist's Ally** is a vibrant platform designed specifically for self-taught artists. It empowers users to showcase their talent, connect with fellow creators, and explore a wealth of artistic inspiration.

## Features

### Guest Access
- **Home**: Explore the platform’s main page.
- **About**: Learn more about Artist's Ally.
- **Contact Us**: Reach out with inquiries or feedback.
- **All Paintings**: View a comprehensive list of paintings.
- **Search**: Find paintings based on price criteria.
- **Register**: Create a new user account.
- **Login**: Access your account.
- **Painting Details**: View details of a selected painting.
- **Add Painting**: Redirects to the login page if not logged in.

### Authenticated Users
- **Home, About, Contact Us, All Paintings, Search**: Same as guest access.
- **Add Painting**: Add new paintings with validation messages for incorrect data.
- **Painting Details**: View details and navigate to the author’s profile.
- **Edit Painting**: Modify paintings authored by the user.
- **Delete Painting**: Remove paintings from the portfolio.
- **Profile**: Manage and view personalized profiles showcasing their paintings.
- **Likes**: Like paintings from other artists.

## Project Architecture

### Frontend Structure
- **Modules:**
  - **Core**: Contains the footer component.
  - **Paintings**: Manages components related to painting operations (Add, Delete, Edit, Item, List, Search).

- **Components:**
  - **About**, **Contact**, **Home**, **Login**, **Logout**, **Navigation**, **Not Found (404)**, **Register**, **User Profile**

- **Services:**
  - **User Services**: Register, Login, Logout.
  - **Painting Services**: Add, Delete, Edit, Details.
  - **Api Service**: Fetches data related to paintings.
  - **Auth Service**: Manages authentication.
  - **Auth Guard Service**: Protects routes requiring authentication.

- **Interceptor:**
  - **Token Interceptor**: Adds Authorization headers to HTTP requests.

- **Types Folder:**
  - **Painting**, **User**, **UserForAuth**: Defines data structures used across the application.

## Usage
- **Explore Paintings**: Browse and view a collection of artworks.
- **Search Paintings**: Use filters to find paintings by price range.
- **Manage Profile**: Create and update your profile with a portfolio of paintings.
- **Interact with Paintings**: Like paintings and engage with other artists.

## API Endpoints

### Painting Endpoints
- **Get All Paintings**
  - `GET /paintings`
  - Returns a list of all paintings.

- **Add Painting**
  - `POST /add`
  - Requires authentication.
  - Request Body: 
    ```json
    {
      "title": "Title",
      "description": "Description",
      "price": 100
    }
    ```

- **Get Painting Details**
  - `GET /paintings/:paintingId`
  - Returns details of a specific painting.

- **Edit Painting**
  - `POST /paintings/:paintingId/edit`
  - Requires authentication and ownership.
  - Request Body:
    ```json
    {
      "title": "Updated Title",
      "description": "Updated Description",
      "price": 150
    }
    ```

- **Delete Painting**
  - `DELETE /paintings/:id/delete`
  - Requires authentication and ownership.

- **Search Paintings**
  - `GET /search`
  - Query Params: `minPrice`, `maxPrice`

- **Like Painting**
  - `POST /paintings/:paintingId/like`
  - Requires authentication.

### User Endpoints
- **Register**
  - `POST /register`
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

- **Login**
  - `POST /login`
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

- **Logout**
  - `GET /logout`
  - Clears authentication token.

- **Get User Profile**
  - `GET /:userId`
  - Returns profile information for a specific user.

- **Get User Paintings**
  - `GET /:userId/paintings`
  - Returns paintings created by the user.

## Acknowledgments
- **Angular** for the frontend framework.
- **Express** for the backend framework.
- **MongoDB and Mongoose** for data management.


## Screenshots
