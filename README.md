# Phase 1

# - layout.ejs: This is the main layout template that all pages will use. Instead of repeating the nav bar and footerr on every page they are placed here once.
# - <header> section with the navigation bar: Home, About Me, Projects, Contact Me. <footer> section with basic text. <body>  This is where each page’s content will be inserted.
# all other .ejs files will be wrapped around this layout

# views/index.ejs
# - This is the content for the Home page. It only contains page specific text because the layout already handles the header and footer.

# app.js is the main application setup
# - I enabled ejs layouts and told express where to find my view templates.

# routes/index.js
# - Controls what happens when you go to the homepage, listens for a request to the root url, loads the index.ejs view, Title is set to home


# Phase 2
# - layout.ejs
# - Updated the layout to make the site more professional and stylish. Added a black top border to the footer, and made it stay at the bottom of the page using flex-column and min-vh-100. Linked Font Awesome so I can use icons like in buttons. Kept the navbar and footer consistent across all pages. Added a container that centers page content both vertically and horizontally.
# - about.ejs
# - added a profile pic, heading, short introduction, and a button linking to the Projects page.
# - Used Bootstrap classes to center content, style the image rounded, shadow, bordered.
# - Set font family and improved paragraph spacing. Added shadow effect to profile picture and border styling. Added black border on footer to separate it from page content.


# Phase 3 
# - contact.ejs
# - The page includes a heading, a prompt saying Fill the form below, a contact form with Name, Email, and Message fields, and a Send Message button.
# - Name field now only accepts letters and spaces using a simple html pattern.
# - Email field includes a basic validation pattern to make sure a proper email format.
# - added extra contact info with my email phone number
# - Used Bootstrap classes to center the content
# - Font Awesome icons are used for email, phone, and button in css
# - added new route to the routes index.js

# Phase 4
# projects.ejs
# - Updated the Projects page to display project cards
# - Each card includes a project image, title, short description, and a View Project button
# - The grid adjusts for different screen sizes using Bootstrap
# - view project buttons are linked to their own ejs as project1 and so on 
# - created separate pages for each project
# - theres a back to projects bvutton to navigate back to the projects section
# - updated route index.js with project1 2 and 3
# - Added minor CSS to make project images consistent in size and style: rounded corners, shadows, and responsive sizing.
# - Card titles and descriptions have proper spacing and readable font sizes.

# Phase 5
# - index.ejs
# - Updated the homepage structuring things
# - Added a centered main title “My Portfolio” in bold and larger font.
# - included my profile pic below the title displayed as a rounded circle with a subtle shadow and border.
# - Added three large, colored buttons linking to About Me, Projects, and Contact Me pages for easy navigation
# - added a short paragraph under the buttons to wlecome
