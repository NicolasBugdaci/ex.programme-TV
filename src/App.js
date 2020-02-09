import React from "react";
import TVShows from "./components/TVShows";
import Logo from "./assets/logo.svg";

import "./App.css";

import data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={Logo} />
        <span className="M6">M6</span>
      </div>
      <div className="wrapper">
        {data.map((elem, index) => {
          return <TVShows data={elem} />;
        })}
      </div>
    </div>
  );
}

export default App;
