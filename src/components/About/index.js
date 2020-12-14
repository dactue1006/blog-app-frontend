import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <h1 className="text-center text-warning p-3">This is About Page!</h1>
      <Footer />
    </div>
  )
}
