import React, { Component } from "react";
import withLayout from "../../../components/withLayout";
import PostForm from "../components/PostForm";
import { updatePost, getPostBySlug } from "../../../utils/mockAPI";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      isLoading: true,
      error: null
    }
  }
  componentDidMount() {
    getPostBySlug(this.props.match.params.postSlug)
      .then((post) => {
        this.setState({
          post,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false
        })
      })
  }

  submitForm = (postEdit) => {
    updatePost(this.state.post.id, postEdit)
      .then((result) => {
        this.props.history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const { isLoading, error, post } = this.state;
    return (
      <div className="container my-5">
        <h1 className="text-center pb-3">Edit the Post</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            {
              isLoading
                ? <div>Loading...</div>
                : error
                  ? <div>{error.message}</div>
                  : <PostForm
                    submitForm={this.submitForm}
                    isEdit={true}
                    post={post}
                  />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withLayout(EditPost, { isShowFooter: false });