import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage';

const Hats = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const Jackets = (props) => {
  return (
    <div>
      <h1>Jackets Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<Hats />} />
        <Route path='/jackets' element={<Jackets />} />
      </Routes>
    </div>
  );
}

export default App;
