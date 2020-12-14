import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Blog() {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <h1 className="text-center text-primary p-3">This is Blog Page!</h1>
      <Footer />
    </div>
  )
}