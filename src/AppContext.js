import React, { createContext, useState } from 'react';

// Create context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <AppContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </AppContext.Provider>
  );
};
