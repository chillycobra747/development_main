# Development

### Link to Deployed Website
`https://chillycobra747.github.io/development_main`

### Goal and Value of the Application
The goal of this application is to allow users to find, sort, filter, and chose dogs they would like
at a shelter. Users can view an initial set of dogs at the Providence shelter, each detailed with the 
dog's name, breed, price, and age. Users can add or remove these dogs to their virtual 'cart,' with 
a total price shown they will need to pay. If users want a specific gender or price range for their dog,
they can apply these filters, or if on a budget, they can order the listed dogs by price! 

### Usability Principles Considered
This application makes it really easy for users to add and remove dogs, depending on price or change of 
heart. If a user make a mistake on the website, it is very clear how to 'undo' this with the buttons. I 
made this usable with color changes in 'toggle' buttons and also a header which describes which filters
they user currenly has applied. Images are adorned with alt text to help with accessability and there 
are clear fonts and headers, making the site easy to navigate and read. 

### Organization of Components
The application has a large header at the top - describing the clear purpose of the site: a Providence Shelter. 
Next, the cart is at the top, where users can add or remove dogs, apply filters, and sort. The 12 different
Dog Cards are at the bottom of the page below the cart. When users apply filters and sort functions, the cards
will move around and change. 

### How Data is Passed Down Through Components
My main file is App.js, where I set up the page and different aspects. I have a ShelterDog component which I 
pass my addDog and remove Dog consts into. This makes it so that each Dog Card has a button where users 
can add or remove these dogs, and this change will be reflected in the cart. Ergo, I built a cart component, which has props of cart and countCartItems. The cart prop is changed depending on adding and removing dogs 
in the ShelterDog component, and (depending on current state) prints a list of dogs which are in the user's cart. Furthermore, I have consts for price and sex filters, which are updated based on button clicks by the user. When these buttons are clicked, I pass the current state

### How the User Triggers State Changes

