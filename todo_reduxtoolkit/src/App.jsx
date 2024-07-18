import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <>
      <div className=" bg-gray-600 pb-[40rem]">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
};

export default App;
