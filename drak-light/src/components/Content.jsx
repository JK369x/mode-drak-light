import React from "react";
import light from '../assets/images/light.svg'
import dark from '../assets/images/dark.svg'
import { useContext } from "react";
import { ThemeContext } from "../App";

export const Content = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <main className={theme==='dark'? 'dark' : 'light'}>
      <div>
        <h1>Learn React HOOK</h1>
        <p>DarkMode WorkShop</p>
      </div>
      <img src={theme==='dark'? dark : light} alt='logo'/>
    </main>
  );
};
