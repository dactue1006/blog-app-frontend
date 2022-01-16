import React, { Component } from "react";
import withLayout from "../../../components/withLayout";
import { Link } from "react-router-dom";
import api from "@utils/api";
import { RESOURCE_URI } from "@utils/constants";
class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      error: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    api.get(`${RESOURCE_URI.POST}/${this.props.match.params.postSlug}`)
      .then((res) => {
        this.setState({
          post: res.data,
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

  renderPostDetail() {
    const { post } = this.state;
    return (
      <div className="col-9">
        {/* Post Title */}
        <h1 className="mt-4">{post.title}</h1>
        <hr />
        {/* Date create Post */}
        <p>Posted on <span className="font-weight-bold">{new Date(post.createdAt).toDateString()}</span></p>
        <hr />
        {/* Preview Image */}
        <img className="rounded img-fluid" src="http://placehold.it/900x300" alt="" />
        <hr />
        {/* Post Content */}
        <p className="lead">
          {post.content}
        </p>
      </div>
    )
  }

  renderError() {
    return (
      <div className="text-center">
        <h2 className="mb-3">{this.state.error.message}</h2>
        <p className="mb-3">The Post you are looking for might have been removed.</p>
        <Link className="btn btn-primary" to="/posts">Back To Blog</Link>
      </div>
    )
  }

  render() {
    const { error, isLoading } = this.state;
    return (
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {
            isLoading
              ? <div>Loading...</div>
              : error
                ? this.renderError()
                : this.renderPostDetail()
          }
        </div>
      </div>
    )
  }
}

export default withLayout(PostDetail);