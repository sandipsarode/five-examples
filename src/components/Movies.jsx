// Example 3: Movie List
const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "The Matrix", director: "Wachowski Sisters", year: 1999 },
];

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
