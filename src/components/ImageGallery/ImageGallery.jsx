import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


export default function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
          key={index}
        />
      )
      )}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};