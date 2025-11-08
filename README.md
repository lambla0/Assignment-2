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