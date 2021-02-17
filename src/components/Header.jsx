import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button
        type="button"
        onClick={() => {
          setTheme(!theme);
        }}
      >
        {theme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
