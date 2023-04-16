import React, { Fragment } from 'react';
import './CssComp/style.css';
export const SignIn = () => {
	return (
		<Fragment className="formCntainer">
			<div className="userForm signInForm">
				<div className="title">
					<h2>Sign In</h2>
				</div>

				<form action="">
					<input type="text" placeholder="Username" />
					<input type="password" placeholder="Password" />
					<p>Forgot password?</p>
					<button type="submit" className="btn btnSignIn">
						Sign in
					</button>
					<p>
						Do you have an account? <a> Create one</a>
					</p>
				</form>
			</div>
		</Fragment>
	);
};
