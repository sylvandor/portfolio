import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.styles.scss';

import Navigation from "./navigation/Navigation.component";
import Resume from "./resume/resume.component";
import Projects from "./projects/projects.component";
import Home from "./home/home.component";

const App = () =>
  <div className="App">
    <Routes>
      <Route path={'/'} element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path={'/resume'} element={<Resume/>}/>
        <Route path={'/projects'} element={<Projects/>}/>
        <Route path={'/personal'} element={<Resume/>}/>
      </Route>
    </Routes>
  </div>;

export default App;
