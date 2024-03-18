# Netflix-GPT

- Create React App
- Confiigured Tailwind CSS
- Header
- Routing of the app
- Login and Sign up form
- Form validation
- useRef hook
- Firebase setup for authentication
- A simple deployment of the application to production using firebase
- Creating user account on sign up
- Implementing sign in with user account
- Create a redux store and a user slice
- Implementing sign out
- Updated the user profile
- Bugfix: Sign up user displayName and profile picture update
- Bugfix: If user is logged in then redirect to browse page if login is accessed and if user is logged out then redirect to login page if browse is accessed
- Unsubscribed from onAuthStateChange event on sign out
- Created a constants.js file for all the constants
- Registered an app and received an API key for querying details from TMDB server
- Created a movie slice for and a reducer for now playing movies

# Features

- Login/Sign Up
  - Sign up / Sign in form
  - redirect to Browse page
- Browse (after authentication)
  - Header
  - Main movie
    - Tailer in background
    - Title & description
    - Movie suggestions
      - List of movies \* N
- Netflix GPT
  - Search bar
  - Movie suggestions
