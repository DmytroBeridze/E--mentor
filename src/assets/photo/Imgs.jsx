import classNames from "classnames";
import PropTypes from "prop-types";

const Imgs = ({ src, alt, className }) => {
  const classes = classNames(className);

  return <img src={src} alt={alt} className={classes} />;
};
Imgs.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
Imgs.defaultProps = {
  src: "https://via.placeholder.com/100x100",
  alt: "image name",
  className: "",
};
export default Imgs;
