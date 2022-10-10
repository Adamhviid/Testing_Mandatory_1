import { appendFile } from "fs";
import React from "react";
import data from "../utils/data.json";

const NameBuilder = () => {
  const min = Math.ceil(0);
  const max = Math.floor(355);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <ul>
        First name:
        <br></br>
        {data[Math.floor(Math.random() * (max - min + 1) + min)].name}
      </ul>
      <ul>
        Last name:
        <br></br>
        {data[Math.floor(Math.random() * (max - min + 1) + min)].surname}
      </ul>
      <ul>
        Gender:
        <br></br>
        {data[Math.floor(Math.random() * (max - min + 1) + min)].gender}
      </ul>
      <div>
        <button onClick={refreshPage}>Generate</button>
      </div>
    </div>
  );
};

export default NameBuilder;

// In order for this to work visually.
// One must import in app and do as
// <NameBuilder />
// For ugly css <NameBuilder className="app" />
// Furthermore import css in app as
// import "./styles.css";

/* Full appendFile.js class shoud be as follow

import React from "react";
import NameBuilder from "./personbuilder/NameBuilder";
import "./styles.css";

const App = () => (
  <div className="home">
    <div>
      <h1>Welcome</h1>
      <div>
        <NameBuilder className="app" />
      </div>
    </div>
  </div>
);

export default App; */
