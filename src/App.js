import React from 'react';
import './App.css';
import Main from './components/main-page';
import Contact from './components/contact-page';
import Project from './components/project-page';
import { HashRouter as Routers, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      <Routers>
        <div className="App">

          <Routes>
            <Route path='/' element={<Main /> }/>
            <Route path='/contact' element={ <Contact />} />
            <Route path='/projects' element={<Project />} />
          </Routes>

        </div>
      </Routers>
    
  );
}

export default App;
