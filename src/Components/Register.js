import React, { Fragment } from 'react';

export const Register = () => {
	return (
		<Fragment>
			<h2>Register</h2>
			<form action="">
				<input type="text" placeholder="Username" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
			</form>
		</Fragment>
	);
};
