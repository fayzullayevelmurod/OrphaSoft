import { Link } from "react-router-dom";
import assets from "../assets";

export const Button = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { rightIcon, to, text, className } = props;
  return (
    <Link to={to}>
      <button className={`teal__btn ${className}`}>
        {text}
        {rightIcon ? (
          <img src={assets.nextArrow} alt="next arrow" width="20" height="20" />
        ) : null}
      </button>
    </Link>
  );
};
