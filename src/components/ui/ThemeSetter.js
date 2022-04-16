import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

export const ThemeSetter = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeSetterClick = () => {
    let currentTheme = theme

    if ( currentTheme == 'light' ) {
      currentTheme = 'dark'
    } else {
      currentTheme = 'light'
    }

    setTheme(currentTheme);
  }
  return (
    <button onClick={ handleThemeSetterClick } className="theme-button">
      {
        ( theme == 'light' )
        ? ( <i className="fa fa-moon"></i> )
        : ( <i className="fa fa-sun"></i> )
      }
    </button>
  );
}