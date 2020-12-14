import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "",
        isValid: null,
        invalidMessage: "Title cannot be blank."
      },
      content: {
        value: "",
        isValid: null,
        invalidMessage: "Content cannot be blank."
      }
    }
  }

  componentDidMount() {
    const { isEdit, post } = this.props;
    if (isEdit) {
      for (const key in this.state) {
        this.setState({
          [key]: {
            ...this.state[key],
            value: post[key]
          }
        })
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: {
        ...this.state[name],
        value
      }
    })
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.checkFormValid()) {
      const { title, content } = this.state;
      const post = {
        title: title.value,
        content: content.value
      }
      this.props.submitForm(post);
    };
  }

  checkFormValid() {
    let formValid = true;
    for (const key in this.state) {
      const field = this.state[key];
      field.value = field.value.trim();
      field.isValid = true;
      if (field.value === "") {
        field.isValid = false;
        formValid = false;
      }
      this.setState({
        [key]: {
          ...field
        }
      })
    }
    return formValid;
  }

  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="font-weight-bold">Title</label>
          <input
            type="text"
            className={`form-control ${title.isValid !== null ? (title.isValid ? "is-valid" : "is-invalid") : ""}`}
            id="title"
            placeholder="Enter Post Title"
            name="title"
            value={title.value}
            onChange={this.handleChange}
          />
          <div className="invalid-feedback">{title.invalidMessage}</div>
        </div>
        <div className="form-group">
          <label htmlFor="content" className="font-weight-bold">Content</label>
          <textarea
            className={`form-control ${content.isValid !== null ? (content.isValid ? "is-valid" : "is-invalid") : ""}`}
            id="content"
            rows="5"
            placeholder="Enter Post Content"
            name="content"
            value={content.value}
            onChange={this.handleChange}
          >
          </textarea>
          <div className="invalid-feedback">{content.invalidMessage}</div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button type="submit" className="btn btn-primary mr-3">Save</button>
          <Link to="/blog" className="btn btn-outline-primary">Cancel</Link>
        </div>
      </form>
    )
  }
}

export default PostForm;