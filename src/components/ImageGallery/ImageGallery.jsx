

export default function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        // <ImageGalleryItem
        //   src={image.webformatURL}
        //   alt={image.tags}
        //   largeImageUrl={image.largeImageURL}
        //   key={index}
        // />
    //   )
      )}
    </ul>
  );
}