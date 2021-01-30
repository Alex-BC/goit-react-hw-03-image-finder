import PropTypes from 'prop-types';

export default function ImagesErrorView({ message }) {
  return (
    <div role="alert">
      <p>Sorry, something went wrong. Error: {message}</p>
    </div>
  );
}

ImagesErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};