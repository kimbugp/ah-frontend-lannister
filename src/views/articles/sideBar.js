import React from "react";
import PropTypes from "prop-types";
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";
import EmailModal from "./emailModal";

const SideBarAction = ({ data, emailShare, handleEmail }) => {
  const shareUrl = `https://ah-frontend-lannister.herokuapp.com/view-article/${
    data.slug
  }`;
  const title = data.title;
  return (
    <div className="sideBar">
      <div><span id="share_text">Share</span></div>
      <div className="share">
        <EmailModal emailShare={emailShare} handleEmail={handleEmail} />
        <p>
          <div className="Demo__some-network">
            <GooglePlusShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <GooglePlusIcon size={32} round />
            </GooglePlusShareButton>
          </div>
        </p>
        <p>
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </p>
        <p>
          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </p>
        <p>
          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </p>
        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

SideBarAction.propTypes = {
  data: PropTypes.object,
  readtime: PropTypes.string.isRequired,
  emailShare: PropTypes.func,
  handleEmail: PropTypes.func
};
export default SideBarAction;
