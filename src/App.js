import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
