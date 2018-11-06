import React from "react";
import PropTypes from "prop-types";

export const InputBox = props => (
  <div className="form-group">
    <input
      className={props.className}
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      required
    />
  </div>
);
InputBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string
};

export default InputBox;
