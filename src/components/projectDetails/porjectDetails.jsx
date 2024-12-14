import React, { useContext, useRef, useState } from "react";
import Task from "../task/task.jsx";
import { AppContext } from "../../appContext.jsx";

export default function ProjectDetails({ details, pID }) {
  const [taskName, setTaskName] = useState("");
  const modalRef = useRef(null);
  const { setProjects, projects } = useContext(AppContext);

  const addTask = (pID, name) => {
    let updatedProjects = [...projects];
    let newTask = {
      name,
      isCompleted: false,
    };
    updatedProjects[pID].tasks.push(newTask);
    setProjects(updatedProjects);
  };

  const openModal = () => {
    modalRef.current.show(); // Open the modal
  };

  const closeModal = () => {
    modalRef.current.close(); // Close the modal
  };

  return (
    <div>
      Project name: {details.name}
      <h1>
        <b>List of tasks</b>
      </h1>
      {details.tasks.map((taskObj, idx) => {
        if (!taskObj.isCompleted) {
          return (
            <div key={idx}>
              <Task task={taskObj} tID={idx} pID={pID}></Task>
            </div>
          );
        }
      })}
      <br />
      <br />
      <br />
      <div>
        <button onClick={openModal}>Add Task</button>

        <dialog ref={modalRef}>
          <h2>Add new Task</h2>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="enter name"
          />
          <br></br>
          <button
            onClick={() => {
              closeModal();
              setTaskName("");
            }}
          >
            Close
          </button>
          <br></br>
          <button
            onClick={() => {
              addTask(pID, taskName);
              setTaskName("");
              closeModal();
            }}
          >
            Save
          </button>
        </dialog>
      </div>
    </div>
  );
}
