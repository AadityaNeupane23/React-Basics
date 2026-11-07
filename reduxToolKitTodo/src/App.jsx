import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="">
        <h1 className=" flex flex-col items-center pt-12 text-center text-4xl font-bold">Redux</h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
