import React from "react";
import { Route, Switch } from "react-router-dom";
import Blog from "./Blog";
import EditPost from "./EditPost";
import NewPost from "./NewPost";
import PostDetail from "./PostDetail";

export default ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/new-post`} component={NewPost} />
      <Route path={`${match.url}/:postSlug/edit`} component={EditPost} />
      <Route path={`${match.url}/:postSlug`} component={PostDetail} />
      <Route exact path={`${match.url}`} component={Blog} />
    </Switch>
  )
}