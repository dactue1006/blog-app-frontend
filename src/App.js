import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/posts/:postSlug/edit" component={EditPost} />
        <Route path="/posts/:postSlug" component={PostDetail} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
