import React, { Fragment } from "react";
import {
  Card,
  CardText,
  CardHeader,
  UncontrolledCollapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Button
} from "reactstrap";
import InsertComment from "../../components/comments/newComment";
import "../../assets/comment/comment.scss";
import PropTypes from "prop-types";
import Moment from "react-moment";

const CommentCard = props => (
  <div className="comment">
    <ViewCard {...props} />
    <Button outline color="primary" id={`reply${props.id}`}>
      Replies
    </Button>
    <UncontrolledCollapse toggler={`#reply${props.id}`} className="replies">
      <InsertComment
        value={"Reply"}
        holder={"Enter your reply here..."}
        id={props.id}
      />
      {props.replies.map(item => (
        <ViewCard {...item} key={item.id} dropdown={true} />
      ))}
    </UncontrolledCollapse>
  </div>
);
export const Selected = props => {
  if (props) {
    return (
      <div className="selected-box">
        <CardText dangerouslySetInnerHTML={{ __html: props.article_section }} /><br/>
      </div>
    );
  }
};
export const ViewCard = props => (
  <Fragment>
    <Card>
      <CardHeader>
        <div id={props.id}>
          <img src={props.author.image} alt="user" />
          <div className="comment-profile">
            <p>{props.author.username}</p>
            <Moment fromNow>{props.created_at}</Moment>
          </div>
          <UncontrolledDropdown
            color="primary"
            className="comments-options"
            hidden={props.dropdown}
          >
            <DropdownToggle outline color="primary" id={props.id} caret>
              ...
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={props.onclick}
                id={props.id}
                disabled={props.button}
              >
                Delete
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </CardHeader>
      <div className="commenter">
        <Selected {...props.section} />
        <CardText dangerouslySetInnerHTML={{ __html: props.body }} />
      </div>
    </Card>
  </Fragment>
);
CommentCard.propTypes = {
  id: PropTypes.number,
  replies: PropTypes.array
};
ViewCard.propTypes = {
  body: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  created_at: PropTypes.string,
  username: PropTypes.string,
  author: PropTypes.object,
  toggle: PropTypes.func,
  onclick: PropTypes.func,
  id: PropTypes.number,
  replies: PropTypes.array,
  button: PropTypes.bool,
  dropdown: PropTypes.bool
};
export default CommentCard;
