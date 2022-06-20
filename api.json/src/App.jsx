import logo from './logo.svg';
import './App.css';
import React from "react";
import {AddTOCart} from "./comp/Products"
import navbar from "./comp/Navbar"
import home from "./comp/Home"

export defult function App() {
  const[count,setCount] = React.useState(0);

  const changeCount = (val) => {
    setCount(count + val);
  };
 return (
   <div className ="App">
     <button onClick={() => changeCount(1)}>+</button>
     <button onClick={() => changeCount(-1)}>-</button>
   </div>
 );
}