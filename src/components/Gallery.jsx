import { images } from "../data/galleryData";

function Gallery() {
  return (
    <>
      {images.map((image) => (
        <div className="" key={image.id}>
          <img
            src={image.url}
            alt={image.caption}
            className="w-72 h-44 rounded-lg object-cover mt-4"
          />
          <p>{image.caption}</p>
          {/* <hr /> */}
        </div>
      ))}
    </>
  );
}

export default Gallery;
