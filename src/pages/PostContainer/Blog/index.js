import React, { Component } from "react";
import withLayout from "@components/withLayout";
import PostItem from "./components/PostItem";
import SideBar from "./components/SideBar";
import { Link } from "react-router-dom";
import api from "@utils/api";
import { RESOURCE_URI } from "@utils/constants";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    api
      .get(`${RESOURCE_URI.POST}`)
      .then((res) => {
        this.setState({
          posts: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
          isLoading: false,
        });
      });
  }

  deletePost = (postId) => {
    api
      .delete(`${RESOURCE_URI.POST}/${postId}`)
      .then(() => {
        this.setState({
          posts: this.state.posts.filter((post) => post.id !== postId),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderListPosts() {
    if (this.state.posts.length === 0) {
      return <p>There are no Posts here.</p>;
    }
    return this.state.posts.map((post) => (
      <PostItem key={post.id} post={post} deletePost={this.deletePost} />
    ));
  }

  renderError() {
    return (
      <div>
        <h4>Sorry! Something went wrong!</h4>
        <p>{this.state.error.message}</p>
      </div>
    );
  }

  render() {
    const { error, isLoading } = this.state;
    return (
      <div className="container">
        <div className="pt-5 pb-3 d-flex align-items-center">
          <h1 className="text-primary">This is Blog Page</h1>
          <Link to="/posts/new-post" className="ml-auto btn btn-primary">
            New Post
          </Link>
        </div>
        <div className="mb-2 row">
          <div className="col-12 col-md-8">
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              this.renderError()
            ) : (
              this.renderListPosts()
            )}
          </div>
          <SideBar />
        </div>
      </div>
    );
  }
}

export default withLayout(Blog);
