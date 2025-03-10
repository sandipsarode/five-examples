import { books } from "../data/booksData";

function Books() {
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <h2>Title: {book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Books;
