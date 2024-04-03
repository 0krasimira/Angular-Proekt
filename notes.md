

Artist's Ally is a vibrant platform tailored specifically for self-taught artists. It aims to empower artists to showcase their talent, connect with fellow creators, and explore a wealth of artistic inspiration.

It offers the following functionalities:

1. Not logged in:

A person who does not have a profile can access the following pages: 

    *Home, 
    *About, 
    *Contacs us, 
    *All paintings - where they can see a list of all added paintings within the blog,
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
    *Painting details - from here, a logged in user can Go to the profile of the painting's author. *Additionally, if the logged in user is the author, they have the option to Edit and Delete the painting.
    *Edit - allows the author to edit their painting's details. 
    *Delete - allows the author to delete the painting from their portfolio.
    *Profile - each artist can create a personalized profile that will showcase their portfolio of created paintings. Logged in artists can access both their profile and other artist's profiles.
    *Likes - a logged in user can like other artist's paintings.


This artist's blog allows people to explore and admire the creations of other artists within the community.
You can discover new techniques, styles, and mediums through the diverse range of artworks on display and support other artists by liking their artworks.
I invite you all to join Artist's Ally today!

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

Services are implemented within the components, where needed. They are held within the given Component's folder.    
