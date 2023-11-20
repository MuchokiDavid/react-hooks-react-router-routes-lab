import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList= directors.map((director, index)=>{
    return(
      <div key={index}>
        <h4>{director.name}</h4>
        <ul>
          <li key={index}>{director.movies[index]}</li>
        </ul>
      </div>
    )
  })
  return (<div>{/*{code here}*/}
  <h1>Directors Page</h1>
  {directorsList}
  </div>);
}

export default Directors;
