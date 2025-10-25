import React, {Component, useState} from "react";
import '../styles/App.css';
import data from "./utils/dreamProjects.json";
import Name from "./Name.js";
import Description from "./Description.js";

const App = () => {
  
  return (
    <div id="main">
      {
        data && data.map((item, index)=>{
          return(
            <div key={index}>
              <Name projectName={item.projectName} />
              <Description description={item.description} />
            </div>
          )
        })
      }
    </div>
  )
}


export default App;
