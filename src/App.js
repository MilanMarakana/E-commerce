// import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import './App.css';

// import HomePage from './pages/homepage/homepage';
// import Shop from './pages/shop/shop';
// import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup';
// import CheckoutPage from './pages/checkout/checkout.js';

// import Header from './components/header/header';

// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/.jsx';
// import { selectCurrentUser } from './redux/user/user-selector.js';
// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     const { setCurrentUser } = this.props;
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot((snapShot) => {
//           setCurrentUser({
//             currentUser: {
//               id: snapShot.id,
//               ...snapShot.data(),
//             },
//           });
//         });
//       }

//       setCurrentUser(userAuth);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path='/' component={HomePage} />
//           <Route path='/shop' component={Shop} />
//           <Route exact path='/checkout' component={CheckoutPage} />
//           <Route
//             path='/sign-in'
//             render={() =>
//               this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
//             }
//           />
//         </Switch>
//       </div>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setCurrentUser: (user) => {
//       dispatch(setCurrentUser(user));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header';

import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-action';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/sign-in'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
