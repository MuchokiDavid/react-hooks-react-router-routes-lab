import React from "react";
import { movies } from "../data";

function Movies() {
  // console.log(movies)
  // const [moviess, setMovies]= useState[movies]
  const movieList= movies.map((movie, index)=> {
    const genres= movie.genres;
    // console.log(genres)
    return(
      <div key={index}>
        <h3>Title: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <ul>
            <li key={index}>{movie.genres}</li>
        </ul>
          
      </div>
    )
  })

  return <div>{/*{code here}*/}
  <h1>Movie Page</h1>
    {movieList}
  </div>;
}

export default Movies;
