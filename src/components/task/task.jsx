import React, { useContext } from "react";
import { AppContext } from "../../appContext";

const Task = ({ task, tID, pID }) => {
  const { setProjects, projects } = useContext(AppContext);

  const completeTask = (pID, tID) => {
    let updatedProjects = [...projects];
    updatedProjects[pID].tasks[tID].isCompleted = true;
    setProjects(updatedProjects);
  };

  const deleteTask = (pID, tID) => {
    let updatedProjects = [...projects];
    updatedProjects[pID].tasks.splice(tID, 1);
    setProjects(updatedProjects);
  };

  return (
    <>
      name: {task.name}
      <div>
        <button type="button" onClick={() => completeTask(pID, tID)}>
          Complete
        </button>
        <br></br>
        <button type="button" onClick={() => deleteTask(pID, tID)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;
