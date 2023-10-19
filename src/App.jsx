import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="font-bodyFont">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
