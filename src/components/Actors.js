import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList= actors.map((actor, index)=>{
    return(
      <div key={index}>
        <h4>{actor.name}</h4>
        <ul>
          {actor.movies.map((movie, movieIndex)=>{
            <li key={movieIndex}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {actorsList}
  </div>;
}

export default Actors;
