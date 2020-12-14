import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import PostContainer from "./pages/PostContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/posts" component={PostContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
