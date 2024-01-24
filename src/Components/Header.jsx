import { useEffect } from "react";
import { useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme") || "medium";
    document.documentElement.setAttribute("class", storedTheme);
    return storedTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("class", theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium activeTheme" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark activeTheme" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
        ></span>
      </div>
    </header>
  );
};

export default Header;

