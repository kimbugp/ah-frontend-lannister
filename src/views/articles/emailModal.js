import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Label,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  modalClose= () =>{
    this.props.emailShare();
    this.toggle();
  }

  render() {
    return (
      <div>
        <a target="_blank" onClick={this.toggle}>
          <i className="material-icons emailIcon">email</i>
        </a>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Share Article By Email</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="enter email address to share with ..."
                  onChange={this.props.handleEmail}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="pull-right" onClick ={this.modalClose} >
              Share
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
EmailModal.propTypes = {
  emailShare: PropTypes.func,
  handleEmail: PropTypes.func,
  className: PropTypes.string
};
export default EmailModal;
