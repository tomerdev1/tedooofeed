import React from "react";
import Feed from "./components/Feed/Feed";
import "./styles/index.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
