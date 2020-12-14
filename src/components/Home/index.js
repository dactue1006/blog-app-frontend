import React from "react";
import withLayout from "../withLayout";

const Home = () => {
  return (
    <h1 className="text-center text-danger p-3">Hello Blog App!</h1>
  )
}

export default withLayout(Home);
