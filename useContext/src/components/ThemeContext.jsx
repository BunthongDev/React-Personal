import { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // State to keep track of the theme (Start and Update)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    // Update the state to the opposite of the current value
    setIsDarkMode(!isDarkMode);
  };

  // Return the context provider with the theme state and toggle function
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
