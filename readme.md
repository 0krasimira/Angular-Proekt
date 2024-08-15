

Artist's Ally is a vibrant platform tailored specifically for self-taught artists. It aims to empower artists to showcase their talent, connect with fellow creators, and explore a wealth of artistic inspiration.

It offers the following functionalities:

1. Not logged in:

A person who does not have a profile can access the following pages: 

    *Home, 
    *About, 
    *Contact us, 
    *All paintings - where they can view a list of all added paintings within the blog,
    *Search - where paintings can be found based on a defined pricing criteria, 
    *Register, 
    *Login, 
    *Painting Details (which only gives the option to go back to All paintings),
    *Add painting (which redirects the user to the login page with a prompt to login in order to add or edit a painting.)

2. Logged in.

A logged in user can access the following pages:

    *Home, 
    *About, 
    *Contact us,
    *All paintings,
    *Search,
    *Add painting - validation messages appear in case of invalid data.
    *Painting details - from here, a logged in user can go to the profile of the painting's author. 

    If the logged in user is the author, they have the option to:
    *Edit - allows the author to edit their painting's details. 
    *Delete - allows the author to delete the painting from their portfolio.

    *Profile - each artist can create a personalized profile that will showcase their portfolio of created paintings. Logged in artists can access both their profile and other artists' profiles.
    *Likes - a logged in user can like other artists' paintings.


Project architecture:

The project's client part (front-end) is structured in the following way:

There are 2 custom modules:
    1. Core - holds the footer
    2. Paintings - holds the paintings components:
        Add painting,  
        Delete painting, 
        Edit painting, 
        Painting item, 
        Paintings list, 
        Search.

Outside of these modules, there are 9 separate components:
    1. About, 
    2. Contacts,
    3. Home, 
    4. Login, 
    5. Logout,
    6. Navigation,
    7. Not found (404), 
    8. Register,
    9. User Profile.

Services are implemented within the components where needed. Most of them are held within the given Component's folder - those are:

    1. Register service,
    2. Login service,
    3. Logout service,
    4. Add painting service,
    5. Delete painting service,
    6. Edit painting service,
    7. Painting details service,
    8. User profile service,

In addition, there are 3 more services:

    1. Api Service - fetches data from the backend, related to paintings - gets all paintings and a single painting by its ID.
    2. Auth-service - manages authentication-related functionalities and user data, fetching from and sending data to the db.
    3. Auth guard service - this is an authentication guard that ensures that certain routes are only accessible to authenticated users.

One interceptor:
    Token Interceptor - aimed to intercept and manipulate HTTP requests and responses. The interceptor retrieves the token, adds an Authorization header with a bearer token to outgoing HTTP requests, thus allowing easy authentication with the backend. 

There is a Types folder which holds the 2 types used throughout the application - Painting and User, as well as UserForAuth, where User interface is used for general user management tasks, while the UserForAuth interface is for authentication-related operations.

This artist's blog allows people to explore and admire the creations of other artists within the community.
You can discover new techniques, styles, and mediums through the diverse range of artworks on display and support other artists by liking their artworks.
I invite you all to join Artist's Ally today!