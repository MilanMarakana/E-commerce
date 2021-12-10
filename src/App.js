import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import SignInAndSignUp from './pages/signin-and-signup';
import Header from './components/header/header';
import { auth } from './firebase/firebase.utils';
import SignIn from './components/sing-in/sign-in';

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<SignInAndSignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </div>
    );
  }
}

export default App;
