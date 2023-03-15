import React from "react";
import "../CSS/Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from './../App';


export default function Header() {

    const {theme, changeTheme} = useContext(themeContext);

  return (
    <div className={theme === "light" ? "light-header" : "dark-header"}>
      <h1>Image Gallery</h1>
      <button><Link to="/">Main</Link></button>
      <button><Link to="/main2">Main-2</Link></button>
      <button onClick={changeTheme}>Change Theme</button>
      <input
        className="search-bar"
        type="search"
        placeholder="Search an image..."
      />
    </div>
  );
}
