const books = [
  { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
  },
];

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
