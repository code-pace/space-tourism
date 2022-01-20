import './App.css'
import React from "react"
import Home from "./Home"
import Destination from "./Destination"
import Crew from "./Crew"
import Technology from "./Technology"
import Navbar from "./Navbar"

function App({Routes, Route}) {
  const data = require("./data.json");
  let {destinations, crew, technology} = data;
  
  return (
    <React.Fragment>
      <Navbar data={data}/>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/destinations" element={<Destination data={destinations} />} />
        <Route path="/crew" element={<Crew data={crew} />} />
        <Route path="/technology" element={<Technology data={technology} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
