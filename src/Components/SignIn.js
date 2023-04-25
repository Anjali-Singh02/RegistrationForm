import './CssComp/style.css';
import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const SignIn = () => {


	const [user, setUser] = useState({
		username: '',
		password: '',
	});
	useEffect(() => {
		console.log(user);
	}, [user]);

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	const handleChange = (event) => {
		const { id, name, value } = event.target;
		console.log(id, name, value);
		setUser((reference) => {});
	};
			// navigate('/')

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
						id="username"
						name="username"
						value={user.username}
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
					<p>Forgot password?</p>
					<button type="submit" className="btn btnSignIn">
						Sign in
					</button>
					<p>
						Do you have an account? <Link to='/register'><a> Create one</a></Link>
					</p>
				</form>
			</div>
		</Fragment>
	);
};
