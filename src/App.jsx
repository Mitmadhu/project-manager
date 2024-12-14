import Project from "./components/project/project";
import ProjectDetails from "./components/projectDetails/porjectDetails";

import "./app.css";
import { useContext } from "react";
import { AppContext } from "./appContext";

function App() {
  const { projects } = useContext(AppContext);
  return (
    <div className="main-view">
      <div>
        {projects.map((el, idx) => (
          <Project details={el} key={idx} pID={idx} />
        ))}
      </div>
      <div>
        {projects.map((el, idx) => {
          if (el.isSelected === true) {
            return <ProjectDetails details={el} key={idx} pID={idx} />;
          }
        })}
      </div>
    </div>
  );
}

export default App;
