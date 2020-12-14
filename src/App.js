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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/posts/:postSlug" component={PostDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
