import React, { useState } from "react";
import "./Header.css";
import LangButton from "../LangButton";

const Header = ({ setTasksArray }) => {
  const [tasks, setTasks] = useState({
    task: "",
    state: "To do",
    tags: [],
  });

  const [key, setKey] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTasks((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (tagb) => {
    setTasks((prev) => {
      return { ...prev, tags: [...prev.tags, tagb] };
    });

    if (tasks.tags.some((item) => item === tagb)) {
      const newTasks = tasks.tags.filter((item) => item !== tagb);
      setTasks((prev) => {
        return { ...prev, tags: newTasks };
      });
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasksArray((prev) => {
      return [...prev, tasks];
    });
    setTasks({
      task: "",
      state: "To do",
      tags: [],
    });

    setKey((prev) => prev + 1);
  };

  return (
    <form onSubmit={addTask} className="header">
      <div className="inpt">
        <input
          type="text"
          placeholder="Enter your task"
          required
          onChange={handleChange}
          name="task"
          value={tasks.task}
        />
      </div>
      <div className="btns-container">
        <div className="tags">
          <LangButton
            key={`Html-${key}`}
            tagname="Html"
            handleClick={handleClick}
            tasks={tasks}
          />
          <LangButton
            key={`css-${key}`}
            tagname="Css"
            handleClick={handleClick}
            tasks={tasks}
          />
          <LangButton
            key={`java-${key}`}
            tagname="JavaScript"
            handleClick={handleClick}
            tasks={tasks}
          />
          <LangButton
            key={`react-${key}`}
            tagname="React"
            handleClick={handleClick}
            tasks={tasks}
          />
        </div>
        <div className="opt-addtsks">
          <select
            name="state"
            id="selectbut"
            onChange={handleChange}
            value={tasks.state}
          >
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit">+ Add Task</button>
        </div>
      </div>
    </form>
  );
};

export default Header;
