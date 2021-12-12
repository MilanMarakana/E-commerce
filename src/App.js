import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import SignIn from './components/sing-in/sign-in';
import { setCurrentUser } from './redux/user/user-action.jsx';

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
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
