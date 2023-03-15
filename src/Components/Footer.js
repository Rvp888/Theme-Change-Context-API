
import React from 'react';
import "../CSS/Footer.css";
import { useContext } from "react";
import { themeContext } from './../App';

export default function Footer() {

    const {theme, changeTheme} = useContext(themeContext);

  return (
    <div className={theme === "light" ? "light-footer" : "dark-footer"}>
      @Aircampus2023
    </div>
  )
}
