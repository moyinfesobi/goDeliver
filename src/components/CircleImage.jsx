import PropTypes from "prop-types";

const CircleImage = ({ src, alt }) => {
  return (
    <p className="w-[56px] h-[56px] rounded-full border border-black flex items-center justify-center">
      <img src={src} alt={alt} />
    </p>
  );
};

CircleImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CircleImage;
