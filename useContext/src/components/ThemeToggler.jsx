import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggler = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-5 rounded-lg shadow-lg text-center ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
    >
      <h1 className="text-2xl font-bold mb-5">Theme Toggler</h1>

      <p className="mb-5">Current Theme: {isDarkMode ? "Dark Mode" : "Light Mode"} </p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
