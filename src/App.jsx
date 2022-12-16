import React from "react";
import "./App.css";
import Header from "./assets/Header";
import Main from "./assets/Main";
import data from "./data";

function App() {
  const info = data.map((place) => {
    return <Main 
    // key={place.title}
    {...place} />;
  });
  console.log(info)
  return (
    <div className="App">
      <Header />
      {info}
    </div>
  );
}

export default App;
