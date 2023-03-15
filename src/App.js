import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Main2 from "./Components/Main2";
import PageNotFound from "./Components/PageNotFound";
import { useState, createContext } from "react";

export const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = (value) => {
    if(theme === "light") {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  }

  return (
    <>
      <themeContext.Provider value={{theme, changeTheme}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/main2" element={<Main2 />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </themeContext.Provider>
    </>
  );
}

export default App;
