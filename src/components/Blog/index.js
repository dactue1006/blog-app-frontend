import React, { Component } from "react";
import withLayout from "../withLayout";
import { getListPosts, deletePostById } from "../../utils/mockAPI";
import PostItem from "../PostItem";
import SideBar from "../SideBar";
import { Link } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      isLoading: true
    }
  }

  componentDidMount() {
    getListPosts()
      .then((posts) => {
        this.setState({
          posts,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false
        })
      });
  }

  deletePost = (postId) => {
    deletePostById(postId)
      .then((result) => {
        this.setState({
          posts: this.state.posts.filter((post) => post.id !== postId)
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderListPosts() {
    if (this.state.posts.length === 0) {
      return <p>There are no Posts here.</p>;
    }
    return this.state.posts.map((post) =>
      <PostItem
        key={post.id}
        post={post}
        deletePost={this.deletePost}
      />
    )
  }

  renderError() {
    return (
      <div>
        <h4>Sorry! Something went wrong!</h4>
        <p>{this.state.error.message}</p>
      </div>
    )
  }

  render() {
    const { error, isLoading } = this.state;
    return (
      <div className="container">
        <div className="d-flex align-items-center pt-5 pb-3">
          <h1 className="text-primary">This is Blog Page</h1>
          <Link to="/new-post" className="ml-auto btn btn-primary">New Post</Link>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-md-8">
            {
              isLoading
                ? <div>Loading...</div>
                : error
                  ? this.renderError()
                  : this.renderListPosts()
            }
          </div>
          <SideBar />
        </div>
      </div>
    )
  }
}

export default withLayout(Blog);