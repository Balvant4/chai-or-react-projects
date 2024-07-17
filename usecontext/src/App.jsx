import React from "react";
import Login from "./pages/Login";

import UserContextProvider from "./contexts/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
};

export default App;
