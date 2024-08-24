import React from "react";
import "./TaskCard.css";
import deleteimg from "../assets/delete.png";
import LangButton from "./LangButton";

const TaskCard = ({task,tasksarray,setTasksArray,num}) => {


  const handleDelete = (num)=>{
    const updatedArray = tasksarray.filter((item,index)=>{
      return index !== num
    })
    setTasksArray(updatedArray)
  }
  return (
    <div className="taskcard">
      <div className="cardtxt">{task.task}</div>
      <div className="tags-deleteimg">
        <div className="tagsimgs">
          {task.tags.map((tg,num)=>{
            return <> <LangButton key={num} tagname={tg} />
          
          </>  
          })}
               
        </div>
        
         <img onClick={()=>handleDelete(num)} className="deleteimg" src={deleteimg} alt="delete" />
      </div>
    </div>
  );
};

export default TaskCard;
