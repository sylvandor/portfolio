import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./navigation/Navigation.component";
import Bio from "./bio/Bio.component";
import Projects from "./projects/Projects.component";
import Home from "./home/Home.component";
import Laser from "./laser/Laser.component";

const App = () =>
  <div className="App">
    <Routes>
      <Route path={'/'} element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path={'/projects'} element={<Projects/>}/>
        <Route path={'/bio'} element={<Bio/>}/>
        <Route path={'/laser'} element={<Laser/>}/>
      </Route>
    </Routes>
  </div>;

export default App;
