import React, { Fragment } from 'react';
import './CssComp/style.css';
export const SignIn = () => {
	return (
		<Fragment className="formCntainer">
			<h2 className="signIn">Sign In</h2>
			<form action="" className="bg-black">
				<label htmlFor="userName">UserName</label>
				<input type="text" />
				<label htmlFor="password">Password</label>
				<input type="password" />
			</form>
		</Fragment>
	);
};
