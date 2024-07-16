import React, { createContext, useState, useEffect } from "react";

// Create the context
export const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
  // Initialize state with data from localStorage if it exists
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("cartProducts");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [login, setLogin] = useState(() => {
    const savedLogin = localStorage.getItem("loginDetails");
    return savedLogin ? JSON.parse(savedLogin) : {};
  });
  console.log("datadatadatadatadatadata", data);

  // Use useEffect to update localStorage whenever data changes
  useEffect(() => {
    console.log("new updated data", data);
    localStorage.setItem("cartProducts", JSON.stringify(data));
  }, [data]);

  // Function to update data
  const updateData = (newData) => {
    console.log("newDatanewDatanewDatanewData", newData);
    setData(newData);
  };
  return (
    <DataContext.Provider value={{ data, updateData, login, setLogin }}>
      {children}
    </DataContext.Provider>
  );
};
