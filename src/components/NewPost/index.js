import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostForm from "../PostForm";
import { createPost } from "../../utils/mockAPI";

class NewPost extends Component {
  submitForm = (post) => {
    this.createNewPost(post);
  }

  createNewPost = (post) => {
    createPost(post)
      .then((result) => {
        this.props.history.push("/blog");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="d-flex flex-column h-100">
        <Header />
        <div className="container my-5">
          <h1 className="text-center pb-3">New Post</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <PostForm submitForm={this.submitForm} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default NewPost;