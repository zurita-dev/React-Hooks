import "./App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme ? "DarkMode" : "LigthMode"}`}>
        <Header />
        <Characters></Characters>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
