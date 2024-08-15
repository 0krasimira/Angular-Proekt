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
![Screenshot 2024-08-15 150723](https://github.com/user-attachments/assets/8cd4561d-be3b-4941-8bd5-86ff3698774e)
![Screenshot 2024-08-15 150708](https://github.com/user-attachments/assets/7c37d8e6-efb2-429a-acb3-fc9249a8ff07)
![Screenshot 2024-08-15 150648](https://github.com/user-attachments/assets/9d894d0d-c60b-4e25-93e8-481c63f03d00)
![Screenshot 2024-08-15 150344](https://github.com/user-attachments/assets/0440c614-fcbd-4c38-be01-d65559685c39)
![Screenshot 2024-08-15 150242](https://github.com/user-attachments/assets/d1446c43-ee7b-4568-b105-ad8e11e14899)
![Screenshot 2024-08-15 150224](https://github.com/user-attachments/assets/e120d51e-ff1d-42b6-a77a-95eed4ce94cb)
![Screenshot 2024-08-15 150136](https://github.com/user-attachments/assets/acf32e19-3b14-428a-8657-28c1f1afb4f8)
![Screenshot 2024-08-15 150127](https://github.com/user-attachments/assets/8057e4db-7a02-4336-8092-7c66cfa3a59f)
![Screenshot 2024-08-15 150104](https://github.com/user-attachments/assets/04cfd800-b2e2-48c6-b2f5-00a259582fe1)
![Screenshot 2024-08-15 150016](https://github.com/user-attachments/assets/83f6fa55-4fcf-4449-af52-34c4d8b09277)
![Screenshot 2024-08-15 150004](https://github.com/user-attachments/assets/0b6bd807-e9b9-4b12-b1aa-52c12690c77f)
![Screenshot 2024-08-15 145952](https://github.com/user-attachments/assets/6215187d-6f57-49d0-81fe-b5fd4416fb55)
