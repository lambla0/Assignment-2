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



