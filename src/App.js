import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import SignInAndSignUp from './pages/signin-and-signup';
import Header from './components/header/header';

// const Hats = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };

// const Jackets = (props) => {
//   return (
//     <div>
//       <h1>Jackets Page</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
