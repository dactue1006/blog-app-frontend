import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <h1 className="text-center text-danger p-3">Hello Blog App!</h1>
      <Footer />
    </div>
  )
}