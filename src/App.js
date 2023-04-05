import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Agenda from "./components/homepage/agenda";
import Rule from "./components/homepage/rule";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Agenda />
      <Rule />
    </div>
  );
}

export default App;
