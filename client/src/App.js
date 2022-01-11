import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStyle } from './global-styles.js';

import Header from './components/header/header';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-action';
import Spinner from './components/spinner/spinner.jsx';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const SignInAndSignUpPage = lazy(() =>
	import('./pages/signin-and-signup/signin-and-signup')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));

const App = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, [dispatch]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
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
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

export default App;
