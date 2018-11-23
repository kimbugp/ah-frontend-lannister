import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../components/navigation/navBar";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Row,
  CardLink
} from "reactstrap";
import classnames from "classnames";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class StoriesView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  deleteArticle = (slug) => {
    confirmAlert({
      title: "Comfirm Delete",
      message: "Are you sure  you want to do this ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.handleDelete(slug)
        },
        {
          label: "No"
        }
      ]
    });
  };

  render() {
    const drafted = this.props.drafted;
    const published = this.props.published;
    let draftlenn;
    let publishlenn;
    let showPublished;
    let showDrafts;
    if (!(drafted instanceof Array)) {
      draftlenn = 0;
      showDrafts = (
        <div>
          <Card className="published-card">
            <CardBody>
              <CardTitle />
              <CardSubtitle />
              <CardText>You have no Draft Articles</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      draftlenn = drafted.length;
      showDrafts = drafted.map(draft => (
        <div key={draft.slug}>
          <Card className="published-card">
            <CardBody>
              <CardTitle>{draft.title}</CardTitle>
              <CardSubtitle>{draft.description}</CardSubtitle>
              <CardText
                dangerouslySetInnerHTML={{
                  __html: draft.body.substring(0, 250)
                }}
              />
              <CardLink href={`/view-article/${draft.slug}`}>
                View More
              </CardLink>{" "}
              |
              <CardLink href="#" onClick={() => this.deleteArticle(draft.slug)}>
                Delete
              </CardLink>{" "}
              |<CardLink href="#" onClick={() => this.props.handlePublishArticle(draft.slug)}>Publish</CardLink>
            </CardBody>
          </Card>
          <br />
        </div>
      ));
    }
    if (!(published instanceof Array)) {
      publishlenn = 0;
      showPublished = (
        <div>
          <Card className="published-card">
            <CardBody>
              <CardTitle />
              <CardSubtitle />
              <CardText>You have no Published articles</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      publishlenn = published.length;
      showPublished = published.map(publish => (
        <div key={publish.id}>
          <Card className="published-card">
            <CardBody>
              <CardTitle>{publish.title}</CardTitle>
              <CardSubtitle>{publish.description}</CardSubtitle>
              <CardText
                dangerouslySetInnerHTML={{
                  __html: publish.body.substring(0, 250)
                }}
              />
              <CardLink id="#link_color" href={`/view-article/${publish.slug}`}>
                View More
              </CardLink>{" "}
              |
              <CardLink
                id="wertf"
                href="#"
                onClick={() => this.deleteArticle(publish.slug)}
              >
                Delete
              </CardLink>
            </CardBody>
          </Card>
          <br />
        </div>
      ));
    }

    return (
      <div>
        <NavBar />
        <br />
        <Nav tabs className="container">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Draft {draftlenn}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Published {publishlenn}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className="container" id="top_width">
          <TabPane tabId="1">
            <br />
            <Row sm="12">{showDrafts}</Row>
          </TabPane>
          <TabPane tabId="2">
            <br />
            <Row sm="12">{showPublished}</Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
StoriesView.propTypes = {
  drafted: PropTypes.array,
  published: PropTypes.array,
  handleDelete: PropTypes.func,
  handlePublishArticle:PropTypes.func
};
export default StoriesView;
