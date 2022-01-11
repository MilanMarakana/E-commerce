import React from 'react';
import SignIn from '../../components/sing-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { SignInAndSignUpContainer } from './signin-and-signup.styles';

const SignInAndSignUp = () => {
	return (
		<SignInAndSignUpContainer>
			<SignIn />
			<SignUp />
		</SignInAndSignUpContainer>
	);
};
export default SignInAndSignUp;
