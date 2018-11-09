import { Button } from "react-toolbox/lib/button/Button";
import React from "react";
import PropTypes from "prop-types";

const EmailSuccess = props => {
  return (
    <div className="signup-form">
      <form>
        <h2>{props.heading}</h2>
        <p className="hint-text">{props.value}</p>
        <Button
          style={props.style}
          id="reset-form"
          type="button"
          className="btn btn-success btn-lg btn-block signup-btn"
          onClick={props.clickAction}
        >
          {props.btnvalue}
        </Button>
      </form>
    </div>
  );
};
EmailSuccess.propTypes = {
  value: PropTypes.string,
  btnvalue: PropTypes.string,
  heading: PropTypes.string,
  clickAction: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default EmailSuccess;
