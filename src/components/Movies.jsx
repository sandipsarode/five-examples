import { movies } from "../data/moviesData";

function Movies() {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>Movie: {movie.title}</h2>
          <p>Director: {movie.director}</p>
          <p>Year: {movie.year}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Movies;
