# React + Vite

Context API Guide for User Login
This guide provides detailed steps to create and use the Context API in a React application to manage user login data.

# Step 1: Create UserContext

Create a Context File:
Create a new JavaScript file named UserContext.js in a folder named contexts.
In this file, import the createContext function from React.
Use createContext to create a new context and export it.

# Step 2: Create UserContextProvider

Create a Provider Component:
Create another JavaScript file named UserContextProvider.jsx in the contexts folder.
In this file, import the useState and useContext hooks from React, and the UserContext you created earlier.
Create a provider component that uses useState to manage the user state.
Wrap the component's children with the UserContext.Provider and pass the user state and updater function as the context value.
Export the provider component.

# Step 3: Pass Provider to App.jsx

Wrap the App Component:
In your main App.jsx file, import the UserContextProvider.
Wrap your App component or relevant part of your component tree with the UserContextProvider to make the context available throughout your application.

# Step 4: Send Data to UserContext

Use Context in Login Component:
In your Login.jsx component, import the useContext hook and the UserContext.
Use useContext to access the setUser function from the context.
Create a form that captures the user's username and password.
On form submission, use the setUser function to update the context with the captured user data.

# Step 5: Retrieve Data from UserContext

Use Context in Other Components:
In any component where you need to access the user data, import the useContext hook and the UserContext.
Use useContext to access the user data from the context.
You can now use the user data as needed within your component.
