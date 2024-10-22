import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import Menubar from './menubar';
import Body from './body';
import Today from './today';
import Next7days from './next7days';

function App() {
  return (
    <Router>
      <div className='w-[100vw] h-[100vh] flex'>
        <Sidebar />
        <Menubar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/today' element={<Today />} />
          <Route path='/next7days' element={<Next7days/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
