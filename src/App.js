import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Agenda from "./components/agenda";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Agenda />
    </div>
  );
}

export default App;
