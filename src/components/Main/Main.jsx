import React from "react";
import "./Main.css";
import Status from "../Status";
import directhit from "../../assets/direct-hit.png";
import glowing from "../../assets/glowing-star.png";
import checkmark from "../../assets/check-mark-button.png";
import TaskCard from "../TaskCard";

const Main = ({ tasksarray, setTasksArray }) => {
  return (
    <div className="main">
      <div className="left-col">
        <Status statu="To do" imgstatu={directhit} />
        {tasksarray.map((item, index) => {
          return item.state === "To do" ? (
            <TaskCard num={index} key={index} task={item} tasksarray={tasksarray} setTasksArray={setTasksArray} />
          ) : (
            <></>
          );
        })}
      </div>
      <div className="mid-col">
        <Status statu="Doing" imgstatu={glowing} />
        {tasksarray.map((item, index) => {
          return item.state === "Doing" ? (
            <TaskCard num={index} key={index} task={item} tasksarray={tasksarray} setTasksArray={setTasksArray} />
          ) : (
            <></>
          );
        })}
      </div>
      <div className="right-col">
        <Status statu="Done" imgstatu={checkmark} />
        {tasksarray.map((item, index) => {
          return item.state === "Done" ? (
            <TaskCard num={index} key={index} task={item} tasksarray={tasksarray} setTasksArray={setTasksArray} />
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
