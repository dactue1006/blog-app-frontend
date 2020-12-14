import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <h1 className="text-center text-danger p-3">Hello Blog App!</h1>
      <Footer />
    </div>
  );
}

export default App;
