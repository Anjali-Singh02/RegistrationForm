import React, { Fragment } from 'react';
import './CssComp/style.css';
export const SignIn = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	const handleChange = (event) => {
		const { id, name, value } = event.target;
		console.log(id, name, value);
		setUser((reference) => {});
	};
	return (
		<Fragment>
			<div className="userForm signInForm">
				<div className="title">
					<h2>Sign In</h2>
				</div>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Username"
						onClick={handleChange}
					/>
					<input
						type="password"
						placeholder="Password"
						onClick={handleChange}
					/>
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
