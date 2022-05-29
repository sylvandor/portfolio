import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./navigation/Navigation.component";
import Bio from "./about/About.component";
import Projects from "./projects/Projects.component";
import Home from "./home/Home.component";

const App = () =>
  <div className="App">
    <Routes>
      <Route path={'/'} element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path={'/projects'} element={<Projects/>}/>
        <Route path={'/about'} element={<Bio/>}/>
      </Route>
    </Routes>
  </div>;

export default App;
