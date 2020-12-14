import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  const { post } = props;
  return (
    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
      <div className="card-body d-flex">
        <div className="card-img-right flex-auto d-flex align-items-center mr-3">
          <img className="" alt="Thumbnail" src="https://via.placeholder.com/160x160" data-holder-rendered="true" />
        </div>
        <div className="d-flex flex-column align-items-start p-3 w-100">
          <div className="d-flex align-items-center w-100">
            <h3 className="mb-0 flex-grow-1">
              <Link className="text-dark" to={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
            <Link to={`/posts/${post.slug}/edit`} className="btn btn-warning btn-sm">Edit</Link>
          </div>
          <p className="mb-3 text-muted">{new Date(post.createdAt).toDateString()}</p>
          <p className="card-text mb-2 crop-text-2">{post.content}</p>
          <Link to={`/posts/${post.slug}`}>Continue reading</Link>
        </div>
      </div>
    </div>
  )
}
