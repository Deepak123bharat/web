import React from "react";

import { About, Experience, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Skills />
    <Work />
    <Footer />
  </div>
);

export default App;
