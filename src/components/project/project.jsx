import React, { useContext } from "react";
import { AppContext } from "../../appContext";

export default function Project({ details, pID }) {
  const { projects, setProjects } = useContext(AppContext);
  const handleClick = (idx) => {
    let updatedProjects = [...projects];
    for (let i = 0; i < projects.length; i += 1) {
      if (i == idx) {
        updatedProjects[i].isSelected = true;
      } else {
        updatedProjects[i].isSelected = false;
      }
    }
    setProjects(updatedProjects);
  };
  return <div onClick={() => handleClick(pID)}>name: {details.name}</div>;
}
