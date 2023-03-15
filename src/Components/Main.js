
import React from 'react';
import "../CSS/Main.css";
import { useContext } from "react";
import { themeContext } from './../App';

export default function Main() {

    const {theme, changeTheme} = useContext(themeContext);

  return (
    <div className={theme === "light" ? "light-main" : "dark-main"}>
      <h1>Main</h1>
    </div>
  )
}
