import React, { Component } from "react";
import withLayout from "../../../components/withLayout";
import PostForm from "../components/PostForm";
import api from "@utils/api";
import { RESOURCE_URI } from "@utils/constants";
class NewPost extends Component {
  submitForm = (post) => {
    this.createNewPost(post);
  };

  createNewPost = (post) => {
    api
      .post(`${RESOURCE_URI.POST}`, post)
      .then(() => {
        this.props.history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container my-5">
        <h1 className="pb-3 text-center">New Post</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <PostForm submitForm={this.submitForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default withLayout(NewPost, { isShowFooter: false });
