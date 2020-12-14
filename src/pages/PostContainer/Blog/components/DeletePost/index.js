import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  deletePost = () => {
    this.setState({ 
      show: false
    })
    this.props.deletePost(this.props.postId);
  }

  render() {
    return (
      <>
        <button className="btn btn-danger btn-sm ml-2" onClick={this.handleShow}>
         delete
       </button>
        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete this post?</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-outline-danger" onClick={this.handleClose}>
              Cancel
          </button>
            <button className="btn btn-danger" onClick={this.deletePost}>
              Delete
          </button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Index;
