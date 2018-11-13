import React,{Fragment} from "react";
import { Button } from "reactstrap";
import "../../assets/comment/comment.scss";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";

const CommentForm = props => (
  <Fragment>
    <form
      onSubmit={props.handleSubmit}
      className="comment"
      onClick={props.onClick}
      id={props.id}
    >
      <ReactQuill
        theme=""
        value={props.comment}
        onChange={props.handleChange}
        placeholder={props.holder}
        style={{ height: props.height }}
      />
      <Button outline color="primary" style={{ display: props.btnstate }}>
        {props.btnValue}
      </Button>
    </form>
  </Fragment>
);

CommentForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  comment: PropTypes.string,
  btnstate: PropTypes.string,
  height: PropTypes.string,
  btnValue: PropTypes.string,
  onClick: PropTypes.func,
  holder:PropTypes.string,
  id:PropTypes.number
};
export default CommentForm;
