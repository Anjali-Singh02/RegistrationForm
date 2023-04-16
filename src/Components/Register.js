import React, { Fragment } from 'react';
import './CssComp/style.css';
export const Register = () => {
	return (
		<Fragment>
			<div className="userForm">
				<div className="title">
					<h2>Register</h2>
				</div>

				<form action="">
					<input type="text" placeholder="Username" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
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
