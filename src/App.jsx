import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const oldArray = localStorage.getItem("taskss");

const App = () => {
  const [tasksarray, setTasksArray] = useState(JSON.parse(oldArray) || []);
  console.log(tasksarray);

  useEffect(() => {
    localStorage.setItem("taskss", JSON.stringify(tasksarray));
  }, [tasksarray]);

  return (
    <div>
      <Header setTasksArray={setTasksArray} />
      <Main tasksarray={tasksarray} setTasksArray={setTasksArray} />
    </div>
  );
};

export default App;
