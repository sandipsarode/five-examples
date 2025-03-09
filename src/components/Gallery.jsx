// Example 5: Image Gallery
const images = [
  {
    id: 1,
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbeautiful-nature&psig=AOvVaw3XwKWCJ9k1wcrSOJOzdt6q&ust=1741632827029000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPj4hYLW_YsDFQAAAAAdAAAAABAE",
    caption: "Nature",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    caption: "City",
  },
];

function Gallery() {
  return (
    <>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt={image.caption} />
          <p>{image.caption}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Gallery;
