import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { getListPosts } from "../../utils/mockAPI";
import PostItem from "../PostItem";
import SideBar from "../SideBar";

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

  renderListPosts() {
    if (this.state.posts.length === 0) {
      return <p>There are no Posts here.</p>;
    }
    return this.state.posts.map((post) =>
      <PostItem
        key={post.id}
        post={post}
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
      <div className="d-flex flex-column h-100">
        <Header />
        <div className="container">
          <h1 className="text-primary pt-5 pb-3">This is Blog Page</h1>
          <div className="row mb-2">
            <div className="col-8">
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
        <Footer />
      </div>
    )
  }
}

export default Blog;