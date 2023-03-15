
import React from 'react';
import "../CSS/Main2.css";
import { useContext } from "react";
import { themeContext } from './../App';

export default function Main2() {

    const {theme, changeTheme} = useContext(themeContext);

  return (
    <div className={theme === "light" ? "light-main2" : "dark-main2"}>
      <h1>Main-2</h1>
    </div>
  )
}
