import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      name: "test",
      tasks: [
        {
          name: "dummy task1 test",
          isCompleted: false,
        },
        {
          name: "dummy task2 test",
          isCompleted: false,
        },
        {
          name: "dummy task3 test",
          isCompleted: false,
        },
        {
          name: "dummy task4 test",
          isCompleted: false,
        },
      ],
      isSelected: false,
      manager: "dummy manager",
    },
    {
      name: "test2",
      tasks: [
        {
          name: "dummy task2",
        },
      ],
      isSelected: true,
      manager: "dummy manager2",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
