import React from "react";
import "./style.css";
import Data from "./component/data"

export default function App() {
  const currentTime= new Date()
  return (
    <div>
     <Data current={currentTime}/>
    </div>
  );
}
