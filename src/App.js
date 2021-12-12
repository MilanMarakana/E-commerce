import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage';
import Shop from './pages/shop/shop';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-action.jsx';

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

  // RedirectToHome = () => {
  //   return
  // };

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route
            path='/sign-in'
            element={
              this.props.currentUser ? (
                <Navigate to='/' replace={true} />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
