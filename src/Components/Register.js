import React, { Fragment, useEffect } from 'react';
import './CssComp/style.css';
import { useState } from 'react';
export const Register = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	useEffect(() => {
		console.log(user);
	}, [user]);

	const handleSubmit = (event) => {
		event.preventDefault();
		// const { username, email, password } = user;
		// console.log({ username, email, password });
	};
	const handleChange = (event) => {
		const { id, name, value } = event.target;
		console.log(id, name, value);
		setUser((reference) => {});
	};
	return (
		<Fragment>
			<div className="userForm registerForm">
				<div className="title">
					<h2>Register</h2>
				</div>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Username"
						id="username"
						name="username"
						value={user.username}
						onChange={handleChange}
					/>
					<input
						type="email"
						placeholder="Email"
						id="email"
						name="email"
						value={user.email}
						onChange={handleChange}
					/>
					<input
						type="password"
						placeholder="Password"
						id="password"
						name="password"
						value={user.password}
						onChange={handleChange}
					/>
					<button type="submit" className="btn btnRegister">
						Register
					</button>
					<p>
						Already have an account? <a> Sign in</a>
					</p>
				</form>
			</div>
		</Fragment>
	);
};
