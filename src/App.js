import React from "react"
import Home from "./Home"
import NavBar from "./NavBar"
// import Footer from "./Footer"
import About from "./About"
import Search from "./Search"
import Recommendation from "./Recommendation"
import {Switch, Route } from "react-router-dom"

export default function App() {
  return (
    <div id="app">
      <NavBar />

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/Recommendation"> <Recommendation /></Route>
          <Route path="/Search"> <Search /></Route>
        </Switch>
          {/* <Footer /> */}
    </div>
  
    
  );
}

